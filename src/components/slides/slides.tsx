import { ExternalLink } from "lucide-react";
import portrait from "@/assets/kevin-portrait.png.asset.json";
import about from "@/assets/kevin-about.jpg.asset.json";
import { SlideFrame } from "./SlideLayout";
import { aiSteps, cases, contact, pillars, type CaseStudy } from "@/lib/portfolio-data";

const TOTAL = 7;

function ReelLink({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="slide-caption inline-flex items-center gap-3 rounded-full border border-violet/40 bg-violet/10 px-6 py-3 font-medium text-bone transition-colors hover:bg-violet/25"
    >
      {label}
      <ExternalLink className="h-5 w-5 text-violet-soft" />
    </a>
  );
}

function Rule() {
  return <div className="h-px w-full bg-gradient-to-r from-violet/70 via-violet/15 to-transparent" />;
}

export function SlideCover() {
  return (
    <SlideFrame page={1} total={TOTAL}>
      <div className="grid h-full grid-cols-[1.15fr_1fr]">
        <div className="flex flex-col justify-between px-24 py-24">
          <p className="slide-kicker text-violet-soft">Portfólio · Social Media & Conteúdo</p>
          <div>
            <h1 className="slide-title-lg">
              KEVIN
              <br />
              <span className="text-violet-soft">FERREIRA</span>
            </h1>
            <p className="slide-subtitle mt-10 max-w-[820px] text-bone/85">
              Criação de conteúdo para redes sociais
            </p>
            <p className="slide-body mt-6 max-w-[760px] text-mute">
              Roteiro, gravação, edição e cultura digital, cuidando do conteúdo do início ao
              publicado, com IA aplicada em cada etapa do processo.
            </p>
          </div>
          <div className="flex gap-20">
            <div>
              <p className="slide-kicker text-mute">E-mail</p>
              <a href={`mailto:${contact.email}`} className="slide-body mt-3 block hover:text-violet-soft">
                {contact.email}
              </a>
            </div>
            <div>
              <p className="slide-kicker text-mute">WhatsApp</p>
              <a href={contact.whatsappHref} target="_blank" rel="noreferrer" className="slide-body mt-3 block hover:text-violet-soft">
                {contact.whatsappLabel}
              </a>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden">
          <img src={portrait.url} alt="Kevin Ferreira" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-transparent to-transparent" />
          <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-ember via-violet to-transparent" />
        </div>
      </div>
    </SlideFrame>
  );
}

export function SlideAbout() {
  return (
    <SlideFrame page={2} total={TOTAL}>
      <div className="grid h-full grid-cols-[0.78fr_1fr]">
        <div className="relative overflow-hidden">
          <img src={about.url} alt="Kevin Ferreira em evento" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-l from-ink via-ink/25 to-transparent" />
        </div>
        <div className="flex flex-col justify-center px-20 py-16">
          <p className="slide-kicker text-violet-soft">Sobre mim</p>
          <h2 className="mt-5 max-w-[880px] font-display text-[62px] font-bold leading-[1.03] tracking-[-0.035em]">
            Conteúdo que junta tendência com estratégia
          </h2>
          <p className="slide-body mt-6 max-w-[880px] text-mute">
            Já produzi conteúdo para perfis que somam mais de 3 milhões de seguidores combinados, em
            nichos como beleza, fitness e educação. Meu trabalho vai do roteiro ao corte final. Às
            vezes entro só na edição, às vezes assumo a direção completa.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-4">
            {pillars.map((p) => (
              <div key={p.n} className="rounded-2xl border border-bone/10 bg-bone/[0.04] px-7 py-6">
                <span className="slide-chrome text-violet-soft">{p.n}</span>
                <h3 className="slide-body-lg mt-1 font-semibold">{p.title}</h3>
                <p className="slide-caption mt-2 text-mute">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideFrame>
  );
}

export function SlideAI() {
  return (
    <SlideFrame page={3} total={TOTAL}>
      <div className="flex h-full flex-col px-28 py-24">
        <p className="slide-kicker text-violet-soft">Como eu trabalho</p>
        <h2 className="slide-title mt-6 max-w-[1300px]">
          IA no meu processo criativo, do roteiro ao vídeo publicado
        </h2>
        <p className="slide-body mt-8 max-w-[1200px] text-mute">
          Não uso IA pra substituir direção criativa, uso pra ganhar velocidade e testar mais ideias
          em menos tempo, sem perder qualidade de entrega.
        </p>
        <div className="mt-16 grid flex-1 grid-cols-4 gap-6">
          {aiSteps.map((s) => (
            <div
              key={s.n}
              className="flex flex-col rounded-3xl border border-bone/10 bg-gradient-to-b from-bone/[0.07] to-transparent p-10"
            >
              <span className="slide-title font-display text-violet/70">{s.n}</span>
              <h3 className="slide-body-lg mt-6 font-semibold">{s.title}</h3>
              <p className="slide-body mt-4 text-mute">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </SlideFrame>
  );
}

export function SlideCase({ study, page }: { study: CaseStudy; page: number }) {
  return (
    <SlideFrame page={page} total={TOTAL}>
      <div className="flex h-full flex-col px-28 py-20">
        <div className="flex items-start justify-between gap-16">
          <div className="max-w-[1150px]">
            <p className="slide-kicker text-violet-soft">{study.index}</p>
            <h2 className="mt-4 font-display text-[68px] font-bold leading-[1.02] tracking-[-0.035em]">
              {study.client}
            </h2>
            <p className="slide-caption mt-3 uppercase tracking-[0.14em] text-mute">{study.niche}</p>
            <p className="slide-body mt-5 max-w-[1000px] text-mute">{study.summary}</p>
          </div>
          {study.stats.length > 0 && (
            <div className="flex shrink-0 gap-12 pt-4">
              {study.stats.map((s) => (
                <div key={s.label} className="text-right">
                  <p className="font-display text-[64px] font-bold leading-none">{s.value}</p>
                  <p className="slide-chrome mt-3 text-mute">{s.label}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-8">
          <Rule />
        </div>

        <div
          className={`mt-8 grid flex-1 auto-rows-min content-center gap-6 ${
            study.groups.length > 1 ? "grid-cols-2" : "grid-cols-1"
          }`}
        >
          {study.groups.map((g) => (
            <div
              key={g.role}
              className="rounded-2xl border border-bone/10 bg-bone/[0.03] px-9 py-8"
            >
              <span className="mb-3 block h-2 w-2 rounded-full bg-ember" />
              <p className="slide-body-lg font-semibold leading-tight">{g.role}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                {g.links.map((l) => (
                  <ReelLink key={l.href} {...l} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {study.extra && (
          <div className="mt-8">
            <p className="slide-kicker text-violet-soft">{study.extra.title}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              {study.extra.items.map((i) => (
                <span
                  key={i}
                  className="slide-caption rounded-full border border-bone/12 bg-bone/[0.04] px-6 py-3 text-mute"
                >
                  {i}
                </span>
              ))}
            </div>
          </div>
        )}

        {study.note && (
          <p className="slide-body mt-6 max-w-[1400px] border-l-2 border-violet pl-8 text-mute">
            {study.note}
          </p>
        )}

      </div>
    </SlideFrame>
  );
}


export function SlideContact() {
  return (
    <SlideFrame page={7} total={TOTAL}>
      <div className="flex h-full flex-col justify-center px-28">
        <p className="slide-kicker text-violet-soft">Bora trabalhar juntos?</p>
        <h2 className="slide-title-lg mt-8 max-w-[1400px]">
          Vamos criar o próximo
          <br />
          conteúdo que <span className="text-violet-soft">viraliza</span>
        </h2>
        <p className="slide-body-lg mt-10 max-w-[1100px] text-mute">
          Pronto pra colocar criatividade, edição e IA a serviço do conteúdo da Colmeia e do
          @gabrielcsobral.
        </p>
        <div className="mt-16 flex flex-wrap gap-5">
          <a
            href={`mailto:${contact.email}`}
            className="slide-body rounded-full bg-bone px-12 py-6 font-semibold text-ink"
          >
            {contact.email}
          </a>
          <a
            href={contact.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="slide-body rounded-full border border-violet/50 bg-violet/15 px-12 py-6 font-semibold text-bone"
          >
            WhatsApp {contact.whatsappLabel}
          </a>
        </div>
        <p className="slide-caption mt-16 text-mute">Kevin Ferreira · Social Media & Conteúdo</p>
      </div>
    </SlideFrame>
  );
}

export const deck = [
  <SlideCover key="cover" />,
  <SlideAbout key="about" />,
  <SlideAI key="ai" />,
  <SlideCase key={cases[0].id} study={cases[0]} page={4} />,
  <SlideCase key={cases[1].id} study={cases[1]} page={5} />,
  <SlideCase key={cases[2].id} study={cases[2]} page={6} />,
  <SlideContact key="contact" />,
];
