import Link from 'next/link';

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div>
      <h1> Hello World</h1>
      <p>
        <Link href="/routing"> Routing </Link>
      </p>
      <p>
        <Link href="/complex-dashboard">Complex Routing Dashboard</Link>
      </p>
      <p>
        <Link href="/rendering"> Rendering </Link>
      </p>
    </div>
  );
}
