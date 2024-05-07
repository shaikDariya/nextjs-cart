import Link from 'next/link';

export const metadata = {
  title: 'Welcome to Products Page',
  description: 'This is for Learning App Routing',
};

export default function Products() {
  return (
    <div>
      <p>
        <Link href="/routing/products/1">Product 1</Link>
      </p>
      <p>
        <Link href="/routing/products/2">Product 2</Link>
      </p>
      <p>
        <Link href="/routing/products/3">Product 3</Link>
      </p>
      <p>
        <Link href="/routing/products/4">Product 4</Link>
      </p>
    </div>
  );
}
