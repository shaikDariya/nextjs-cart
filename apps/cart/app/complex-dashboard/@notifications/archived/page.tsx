import Card from '../../../../components/card';
import Link from 'next/link';

export default function () {
  return (
    <Card>
      <div>
        This is archived View
        <Link href="/complex-dashboard">Default</Link>
      </div>
    </Card>
  );
}
