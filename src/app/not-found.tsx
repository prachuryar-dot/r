import Link from 'next/link';
import H1 from '@/components/designSystem/typography/H1';
import Text from '@/components/designSystem/typography/Text';

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md space-y-8 text-center">
        <div>
          <H1 className="mb-2 text-3xl font-bold text-gray-900">404 - Page Not Found</H1>
          <Text variant="paragraph" className="mb-8 text-gray-600">
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
          </Text>
          <Link
            href="/"
            className="inline-block rounded-md bg-primary px-6 py-3 text-white transition-colors hover:bg-primary/90"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
