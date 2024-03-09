import { SimpleLoader } from '../loaders/SimpleLoader';

type CustomInputProps = {
  label: string;
  value: string;
  setValue: (arg: string) => {};
  isLoading: Boolean;
  handleSearch: (e: any) => void;
};

export const CustomInput = (props: CustomInputProps) => {
  const { label, value, setValue, isLoading, handleSearch } = props;
  return (
    <form onSubmit={(e) => handleSearch(e)}>
      <div className='flex items-center justify-center p-8 bg-slate-200'>
        <label
          htmlFor='small-input'
          className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
        >
          {label}
        </label>
        <input
          type='text'
          id='small-input'
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className='block p-2 w-3/6 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        />
        {isLoading ? (
          <SimpleLoader />
        ) : (
          <button onClick={(e) => handleSearch(e)}>🔍</button>
        )}
      </div>
    </form>
  );
};
