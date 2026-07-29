import { useEffect, useRef, useState, type ReactNode } from "react";

export function SlideFrame({
  children,
  page,
  total,
}: {
  children: ReactNode;
  page: number;
  total: number;
}) {
  return (
    <div className="slide-content font-sans">
      <div className="pointer-events-none absolute -left-40 -top-52 h-[720px] w-[720px] glow-violet opacity-50 blur-[80px]" />
      <div className="pointer-events-none absolute -right-32 bottom-[-220px] h-[560px] w-[560px] glow-ember opacity-25 blur-[90px]" />
      <div className="relative z-10 h-full w-full">{children}</div>
      <div className="slide-page absolute bottom-12 right-16 z-10 tracking-[0.3em] text-mute">
        {String(page).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </div>
    </div>
  );
}

/** Scales a 1920x1080 slide to fit its container. */
export function ScaledSlide({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.4);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => {
      const { width, height } = el.getBoundingClientRect();
      setScale(Math.min(width / 1920, height / 1080));
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative h-full w-full overflow-hidden">
      <div
        className="absolute left-1/2 top-1/2 -ml-[960px] -mt-[540px] origin-center"
        style={{ transform: `scale(${scale})` }}
      >
        {children}
      </div>
    </div>
  );
}
