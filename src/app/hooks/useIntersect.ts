'use client';

import { useEffect, useRef, useState } from 'react';

export function useIntersect(threshold = 0.1) {
  const ref = useRef<HTMLElement>(null);
  const [intersected, setIntersected] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersected(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, intersected };
}
