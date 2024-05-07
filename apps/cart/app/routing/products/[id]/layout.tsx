import Link from 'next/link';

export const metadata = {
  title: 'Welcome to Products Details Page',
  description: 'This is for Learning App Routing',
};

export default function ({ children }: { children: React.ReactElement }) {
  return (
    <>
      {children}
      <Link href="/routing/products">Back</Link>
    </>
  );
}
