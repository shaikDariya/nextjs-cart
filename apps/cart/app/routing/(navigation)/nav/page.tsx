'use client';
// As we are using hooks we need to convert it to client component.
import { usePathname, useRouter } from 'next/navigation';

export default function () {
  const pathname = usePathname();
  const router = useRouter();

  /**
   * Programitically Change route
   */

  const changePath = () => {
    // Then current path is replace so when we go back we don't see this page again.
    router.replace('/routing/products');
    // if we use router.push() then when we back we will come to this page again.
  };

  return (
    <div>
      <p>{pathname}</p>
      <div>
        <button onClick={changePath}>Move to Products with out Link</button>
      </div>
    </div>
  );
}
