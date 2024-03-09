import { SimpleLoader } from '../loaders/SimpleLoader';

type CustomInputProps = {
  label: string;
  value: string;
  setValue: (arg: string) => {};
  isLoading: Boolean;
  onClick: (e: any) => void;
};

export const CustomInput = (props: CustomInputProps) => {
  const { label, value, setValue, isLoading, onClick } =
    props;
  return (
    <div className='justify-around bg-slate-200'>
      <div className='sm:w-5/6 md:w-3/5 lg:w-2/4 xl:w-screen'>
        <label htmlFor='small-input' className=''>
          {label}
        </label>
        <div className='flex items-center'>
          <input
            type='text'
            id='small-input'
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className='block p-2 my-3 w-full h-1/4 sm:w-2/4 text-gray-900 border border-gray-300
             rounded-lg bg-gray-50 text-s focus:ring-blue-500
            focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600
             dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          />
          {isLoading ? (
            <SimpleLoader />
          ) : (
            <button onClick={(e) => onClick(e)}>🔍</button>
          )}
        </div>
      </div>
    </div>
  );
};
