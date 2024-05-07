'use client';

import { useState } from 'react';

export default function () {
  const [show, setShow] = useState(false);

  if (show) {
    throw new Error('Error While Renedering Component');
  }

  return (
    <div>
      <button
        onClick={() => {
          throw new Error('Error In event handlers');
        }}
      >
        ThrowError
      </button>
      <button onClick={() => setShow((s) => !s)}>Show Error</button>
    </div>
  );
}
