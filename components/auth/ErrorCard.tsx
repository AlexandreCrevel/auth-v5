import { CardWrapper } from '@/components/auth/CardWrapper';

const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="Oops! Something went wrong"
      backButtonHref="/login"
      backButtonLabel="Back to login"
    >
      <div className="flex flex-col items-center justify-center">
        <p>There was an error signing in.</p>
        <p className="text-center">
          Please try again or contact support if the problem persists.
        </p>
      </div>
    </CardWrapper>
  );
};

export default ErrorCard;
