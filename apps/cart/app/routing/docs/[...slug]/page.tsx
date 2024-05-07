export default function ({ params }: { params: { slug: string[] } }) {
  return (
    <div>
      This is Doc's Page
      <p>You are viewing doc's for {params.slug.join(',')}</p>
    </div>
  );
}
