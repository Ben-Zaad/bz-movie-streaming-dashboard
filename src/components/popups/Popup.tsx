import React from 'react';

type PopupProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Popup: React.FC<PopupProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  const handlePopupClose = () => {
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 ${isOpen ? 'block' : 'hidden'} bg-gray-800 bg-opacity-50 z-50`}
    >
      <div className='bg-white w-1/2 p-6 mx-auto mt-20 rounded-md shadow-md'>
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-lg font-semibold'>
            Popup Title
          </h2>
          <button
            onClick={handlePopupClose}
            className='text-gray-600 hover:text-gray-800 focus:outline-none'
          >
            Close
          </button>
        </div>
        <div className='content'>{children}</div>
        <div className='mt-4'>
          <button
            onClick={handlePopupClose}
            className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none'
          >
            Close Popup
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
