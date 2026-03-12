"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Props = {
  value: number;
  duration?: number; // ms
  decimals?: number;
  suffix?: string;
  prefix?: string;
  format?: (n: number) => string;
};

export default function AnimatedNumber({
  value,
  duration = 900,
  decimals = 0,
  suffix = "",
  prefix = "",
  format,
}: Props) {
  const [display, setDisplay] = useState(0);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number>(0);
  const fromRef = useRef<number>(0);

  const formatter = useMemo(() => {
    if (format) return format;
    return (n: number) =>
      n.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      });
  }, [format, decimals]);

  useEffect(() => {
    const from = display;
    fromRef.current = from;
    startRef.current = performance.now();

    const tick = (now: number) => {
      const t = Math.min(1, (now - startRef.current) / duration);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - t, 3);
      const next = fromRef.current + (value - fromRef.current) * eased;
      setDisplay(next);

      if (t < 1) rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <span>
      {prefix}
      {formatter(display)}
      {suffix}
    </span>
  );
}