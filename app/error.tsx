"use client";

import { useEffect } from "react";

interface ErrorStateProps {
  error: Error;
}

const ErrorState: React.FC<ErrorStateProps> = ({ error }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <p>Something went wrong</p>
      <p>Contact us and show error details</p>
    </div>
  );
};

export default ErrorState;
