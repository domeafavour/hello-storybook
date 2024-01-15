import React from 'react';
import { useMemo, useState } from 'react';

export function useCounter(initialCount = 0) {
  const [count, setCount] = useState(initialCount);
  return [
    count,
    useMemo(
      () => ({
        increment: () => setCount((v) => v + 1),
        decrement: () => setCount((v) => v - 1),
      }),
      []
    ),
  ] as const;
}

export function UseCounter({ initialCount }: { initialCount?: number }) {
  const [count, { increment }] = useCounter(initialCount);
  return (
    <button type="button" onClick={increment}>
      {count}
    </button>
  );
}
