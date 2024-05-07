import Link from 'next/link';
import Card from '../../../components/card';

const holdTime = async () => {
  await new Promise((res) => setTimeout(res, 1000));
};
export default async function () {
  await holdTime();
  return (
    <Card>
      <div>
        Notifications Block
        <Link href="/complex-dashboard/archived">Archied</Link>
      </div>
    </Card>
  );
}
