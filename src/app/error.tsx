'use client';

import { useEffect } from 'react';
import { Metadata } from 'next';
import H1 from '@/components/designSystem/typography/H1';
import Text from '@/components/designSystem/typography/Text';

export const metadata: Metadata = {
  title: 'Error - Pattem Estates',
  description: 'Something went wrong. Please try again.',
};

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md space-y-8 text-center">
        <div>
          <H1 className="mb-2 text-3xl font-bold text-gray-900">Oops! Something went wrong</H1>
          <Text variant="paragraph" className="mb-8 text-gray-600">
            We apologize for the inconvenience. Please try again.
          </Text>
          <button
            onClick={reset}
            className="rounded-md bg-primary px-6 py-3 text-white transition-colors hover:bg-primary/90"
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
}
