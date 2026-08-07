import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Download, Maximize2 } from "lucide-react";
import { ScaledSlide } from "@/components/slides/SlideLayout";
import { deck } from "@/components/slides/slides";

export const Route = createFileRoute("/slides")({
  head: () => ({
    meta: [
      { title: "Kevin Ferreira | Portfólio em slides" },
      {
        name: "description",
        content:
          "Versão em slides do portfólio de Kevin Ferreira: cases de conteúdo, processo com IA e contato.",
      },
      { property: "og:title", content: "Kevin Ferreira | Portfólio em slides" },
      {
        property: "og:description",
        content: "Deck navegável com os cases de conteúdo de Kevin Ferreira.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Deck,
});

function Deck() {
  const [i, setI] = useState(0);
  const [printMode, setPrintMode] = useState(false);
  const total = deck.length;

  const go = useCallback(
    (d: number) => setI((p) => Math.min(total - 1, Math.max(0, p + d))),
    [total],
  );

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.search.includes("print")) {
      setPrintMode(true);
    }
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  useEffect(() => {
    document.title = `${i + 1}/${total} · Kevin Ferreira · Portfólio`;
  }, [i, total]);

  if (printMode) {
    return (
      <div className="bg-black">
        {deck.map((slide, idx) => (
          <div key={idx} className="print-page">
            {slide}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex h-screen flex-col bg-black">
      <div className="relative flex-1">
        <ScaledSlide>{deck[i]}</ScaledSlide>
      </div>

      <div className="no-print flex items-center justify-between gap-4 border-t border-white/10 bg-black px-6 py-4">
        <div className="flex items-center gap-2">
          {deck.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                idx === i ? "w-8 bg-violet-soft" : "w-3 bg-white/25 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a
            href="?print"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 hover:bg-white/10"
          >
            <Download className="h-4 w-4" /> Baixar PDF
          </a>
          <button
            onClick={() => document.documentElement.requestFullscreen?.()}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 hover:bg-white/10"
          >
            <Maximize2 className="h-4 w-4" /> Apresentar
          </button>
          <button
            onClick={() => go(-1)}
            disabled={i === 0}
            className="rounded-full border border-white/15 p-2 text-white/80 hover:bg-white/10 disabled:opacity-30"
            aria-label="Slide anterior"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => go(1)}
            disabled={i === total - 1}
            className="rounded-full border border-white/15 p-2 text-white/80 hover:bg-white/10 disabled:opacity-30"
            aria-label="Próximo slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
