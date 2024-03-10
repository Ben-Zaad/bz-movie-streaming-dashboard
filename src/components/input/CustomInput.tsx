type CustomInputProps = {
  label: string;
  value: string;
  placeholder: string;
  setValue: (arg: string) => {};
};

export const CustomInput = (props: CustomInputProps) => {
  const { label, value, setValue } = props;
  return (
    <div className='justify-around bg-slate-200 sm:w-screen'>
      <div className='flex flex-col sm-flex-row'>
        <label htmlFor='small-input' className='min-w-80'>
          {label}
        </label>
        <div className='flex items-center'>
          <input
            type='text'
            id='small-input'
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder='Type here to search'
            className='block p-2 my-3 h-1/4 text-gray-900 border border-gray-300
             rounded-lg bg-gray-50 text-s focus:ring-blue-500
            focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600
             dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          />
        </div>
      </div>
    </div>
  );
};
