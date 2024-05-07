import Link from 'next/link';

export default function () {
  return (
    <div>
      I'm main Routing page I have 2 nested routes under name.
      <p>
        <Link href="/routing/about">About</Link>
      </p>
      <p>
        <Link href="/routing/preferences">Preferences</Link>
      </p>
    </div>
  );
}
