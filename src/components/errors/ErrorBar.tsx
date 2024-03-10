type ErrorBarProps = {
  errorMessage: string;
};

export const ErrorBar = (props: ErrorBarProps) => {
  const { errorMessage } = props;
  return (
    <div
      className='p-4 text-sm text-red-800 bg-red-50'
      role='alert'
    >
      <span className='font-medium'>{errorMessage}</span>
    </div>
  );
};
