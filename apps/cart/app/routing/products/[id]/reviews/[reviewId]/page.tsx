import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Product Review Page',
  description: 'This is learning Nested Dynamic Routes',
};

export default function ({ params }: any) {
  if (parseInt(params.reviewId) > 100) {
    notFound(); // This will find the nearest not-found.tsx
  }
  return (
    <div>
      <p>
        Product {params.id} review Number {params.reviewId}
      </p>
    </div>
  );
}
