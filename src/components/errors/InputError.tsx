type InputErrorProps = {
  searchError: string;
};

export const InputError = (props: InputErrorProps) => {
  const { searchError } = props;
  if (searchError) {
    return (
      <div className='p-4 text-sm text-red-800 bg-red-50' role='alert'>
        <span className='font-medium'>{searchError}</span>
      </div>
    );
  } else {
    return <></>;
  }
};
