type InputErrorProps = {
  errorMessage: string;
};

export const InputError = (props: InputErrorProps) => {
  const { errorMessage } = props;
  if (errorMessage) {
    return (
      <div
        className='p-4 text-sm text-red-800 bg-red-50'
        role='alert'
      >
        <span className='font-medium'>{errorMessage}</span>
      </div>
    );
  } else {
    return <></>;
  }
};
