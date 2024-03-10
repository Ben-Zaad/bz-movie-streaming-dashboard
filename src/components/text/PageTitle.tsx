import React from 'react';

type PageTitleProps = {
  title: string;
};

const PageTitle: React.FC<PageTitleProps> = (props) => {
  return (
    <div className='flex justify-center bg-slate-600 min-h-10 sw:min-h-20 text-xl sm:text-5xl cursor-default'>
      <h1 className='py-9 px-3 text-center text-slate-50'>
        {props.title}
      </h1>
    </div>
  );
};

export default PageTitle;
