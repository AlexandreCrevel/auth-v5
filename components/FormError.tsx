import { FaExclamationTriangle } from 'react-icons/fa';

type FormErrorProps = {
  message: string | undefined;
};

const FormError = ({ message }: FormErrorProps) => {
  if (!message) return null;
  return (
    <div className="bg-destructive/15 text-destructive flex items-center rounded-md p-3 text-sm">
      <FaExclamationTriangle className="mr-2" />
      {message}
    </div>
  );
};

export default FormError;
