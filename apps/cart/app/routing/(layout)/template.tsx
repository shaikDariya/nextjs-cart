'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function ({ children }: { children: React.ReactElement }) {
  const [input, setInput] = useState('');
  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <Link href="/routing/child1">Child1</Link>
      <Link href="/routing/child2">Child2</Link>
      <Link href="/routing/child3">Child3</Link>
      {children}
    </>
  );
}
