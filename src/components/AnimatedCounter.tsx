import { useEffect, useState, useRef } from 'react';

interface AnimatedCounterProps {
  target: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

export default function AnimatedCounter({
  target,
  duration = 1500,
  suffix = '',
  prefix = '',
  label,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let startTimestamp: number | null = null;
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(target); // Ensure absolute accuracy at final tick
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = elementRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [target, duration]);

  return (
    <div
      ref={elementRef}
      className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 rounded-md transition-all hover:bg-white dark:hover:bg-slate-950 hover:border-slate-350 dark:hover:border-slate-700 flex flex-col justify-center h-full shadow-3xs"
    >
      <span className="block text-2xl md:text-3xl font-bold text-slate-900 dark:text-white font-display tracking-tight">
        {prefix}{count}{suffix}
      </span>
      <span className="text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-widest font-mono font-bold mt-1 leading-snug">
        {label}
      </span>
    </div>
  );
}
