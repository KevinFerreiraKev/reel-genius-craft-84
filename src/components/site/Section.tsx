import type { ReactNode } from "react";

export function Section({
  id,
  kicker,
  title,
  lead,
  children,
}: {
  id?: string;
  kicker: string;
  title: string;
  lead?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="border-t border-bone/10 px-6 py-24 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-soft">
          {kicker}
        </p>
        <h2 className="mt-5 max-w-3xl font-display text-3xl font-bold leading-tight tracking-tight text-bone md:text-5xl">
          {title}
        </h2>
        {lead ? <p className="mt-5 max-w-2xl text-base text-mute md:text-lg">{lead}</p> : null}
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-2xl border border-bone/10 bg-bone/[0.03] p-7 transition-colors hover:border-violet/40 ${className}`}
    >
      {children}
    </div>
  );
}
