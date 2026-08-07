import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Mail, MessageCircle, Linkedin, Presentation } from "lucide-react";
import portrait from "@/assets/kevin-portrait.png.asset.json";
import about from "@/assets/kevin-about.jpg.asset.json";
import { Card, Section } from "@/components/site/Section";
import { aiSteps, cases, contact } from "@/lib/portfolio-data";
import {
  education,
  fitPoints,
  heroStats,
  linkedin,
  marketExperience,
  niches,
  salesCases,
  strategyPillars,
} from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kevin Ferreira | Social Media Estratégico e Conteúdo" },
      {
        name: "description",
        content:
          "Portfólio de Kevin Ferreira: social media estratégico, captação e edição de vídeo, Founder Led Growth e conteúdo que gera negócio.",
      },
      { property: "og:title", content: "Kevin Ferreira | Social Media Estratégico" },
      {
        property: "og:description",
        content:
          "Narrativa, captação, edição e dados. Conteúdo para perfis que somam mais de 3 milhões de seguidores.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Site,
});

const nav = [
  { href: "#sobre", label: "Sobre" },
  { href: "#estrategia", label: "Estratégia" },
  { href: "#cases", label: "Cases de conteúdo" },
  { href: "#mercado", label: "Mercado e vendas" },
  { href: "#contato", label: "Contato" },
];

function Site() {
  return (
    <div className="min-h-screen bg-ink font-sans text-bone">
      <header className="sticky top-0 z-50 border-b border-bone/10 bg-ink/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-12 lg:px-20">
          <span className="font-display text-lg font-bold tracking-tight">Kevin Ferreira</span>
          <nav className="hidden items-center gap-7 text-sm text-mute lg:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="transition-colors hover:text-bone">
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href={contact.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-bone px-5 py-2 text-sm font-semibold text-ink transition-opacity hover:opacity-85"
          >
            Falar comigo
          </a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden px-6 pb-20 pt-16 md:px-12 md:pt-24 lg:px-20">
          <div className="pointer-events-none absolute -left-40 -top-52 h-[620px] w-[620px] glow-violet opacity-40 blur-[90px]" />
          <div className="pointer-events-none absolute -right-40 top-40 h-[520px] w-[520px] glow-ember opacity-20 blur-[100px]" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-soft">
                Social Media Estratégico e Criação de Conteúdo
              </p>
              <h1 className="mt-6 font-display text-5xl font-bold leading-[0.98] tracking-tight md:text-7xl">
                Conteúdo que constrói
                <br />
                <span className="text-violet-soft">autoridade</span> e vira negócio
              </h1>
              <p className="mt-7 max-w-xl text-lg text-mute">
                Sou Kevin Ferreira, estrategista digital com mais de 5 anos de mercado. Junto duas
                coisas que raramente andam juntas: repertório de creator economy para criar
                narrativa e presença, e bagagem comercial para transformar audiência em receita.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#cases"
                  className="inline-flex items-center gap-2 rounded-full bg-bone px-7 py-3 text-sm font-semibold text-ink transition-opacity hover:opacity-85"
                >
                  Ver os cases <ArrowUpRight className="h-4 w-4" />
                </a>
                <Link
                  to="/slides"
                  className="inline-flex items-center gap-2 rounded-full border border-violet/50 bg-violet/15 px-7 py-3 text-sm font-semibold transition-colors hover:bg-violet/25"
                >
                  <Presentation className="h-4 w-4" /> Versão em slides
                </Link>
              </div>
              <dl className="mt-14 grid grid-cols-2 gap-8 sm:grid-cols-4">
                {heroStats.map((s) => (
                  <div key={s.label}>
                    <dt className="font-display text-3xl font-bold leading-none">{s.value}</dt>
                    <dd className="mt-2 text-xs leading-snug text-mute">{s.label}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="relative overflow-hidden rounded-3xl border border-bone/10">
              <img
                src={portrait.url}
                alt="Retrato de Kevin Ferreira"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink to-transparent" />
            </div>
          </div>
        </section>

        {/* Sobre */}
        <Section
          id="sobre"
          kicker="Sobre mim"
          title="Estratégia de conteúdo com mão na massa da captação à publicação"
        >
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1fr]">
            <div className="overflow-hidden rounded-3xl border border-bone/10">
              <img
                src={about.url}
                alt="Kevin Ferreira em ambiente profissional"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="space-y-5 text-base text-mute md:text-lg">
              <p>
                Já produzi conteúdo para perfis que somam mais de 3 milhões de seguidores, em nichos
                como beleza, fitness, educação e negócios. Em alguns projetos entro só na edição, em
                outros assumo tudo: pauta, roteiro, direção de gravação, corte final e publicação.
              </p>
              <p>
                Antes disso, atuei como analista de marketing gerindo mais de R$300 mil em mídia em
                um único mês e como gestor comercial em agências, conduzindo prospecção, negociação e
                fechamento. É essa mistura que faz meu conteúdo nascer olhando para o funil, e não
                só para o feed.
              </p>
              <p>
                Trabalho bem em rotina híbrida, com encontros presenciais para alinhamento e
                gravação, e uso IA no dia a dia para ganhar velocidade sem terceirizar a direção
                criativa.
              </p>
            </div>
          </div>
        </Section>

        {/* Estratégia */}
        <Section
          id="estrategia"
          kicker="Como eu penso conteúdo"
          title="Quatro frentes que sustentam presença digital de fundador"
          lead="Marca pessoal só vira ativo quando narrativa, produção, funil e dados trabalham no mesmo ritmo."
        >
          <div className="grid gap-5 md:grid-cols-2">
            {strategyPillars.map((p) => (
              <Card key={p.n}>
                <span className="font-display text-2xl font-bold text-violet/70">{p.n}</span>
                <h3 className="mt-3 text-xl font-semibold">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mute">{p.desc}</p>
              </Card>
            ))}
          </div>
        </Section>

        {/* IA */}
        <Section
          kicker="IA no processo"
          title="Inteligência artificial como acelerador, nunca como substituta da direção"
          lead="Uso IA para testar mais ideias em menos tempo e chegar mais rápido na versão boa."
        >
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {aiSteps.map((s) => (
              <Card key={s.n}>
                <span className="font-display text-2xl font-bold text-violet/70">{s.n}</span>
                <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mute">{s.desc}</p>
              </Card>
            ))}
          </div>
        </Section>

        {/* Cases de conteúdo */}
        <Section
          id="cases"
          kicker="Cases de conteúdo"
          title="Vídeos que eu escrevi, gravei, dirigi ou editei"
          lead="Cada link abre o reel publicado. O rótulo indica exatamente qual foi o meu papel na entrega."
        >
          <div className="space-y-8">
            {cases.map((c) => (
              <article
                key={c.id}
                className="rounded-3xl border border-bone/10 bg-bone/[0.03] p-7 md:p-10"
              >
                <div className="flex flex-wrap items-start justify-between gap-6">
                  <div className="max-w-2xl">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-soft">
                      {c.index}
                    </p>
                    <h3 className="mt-3 font-display text-2xl font-bold md:text-3xl">{c.client}</h3>
                    <p className="mt-2 text-xs uppercase tracking-[0.16em] text-mute">{c.niche}</p>
                    <p className="mt-4 text-base text-mute">{c.summary}</p>
                  </div>
                  {c.stats.length > 0 && (
                    <div className="flex gap-8">
                      {c.stats.map((s) => (
                        <div key={s.label}>
                          <p className="font-display text-3xl font-bold leading-none">{s.value}</p>
                          <p className="mt-2 text-xs text-mute">{s.label}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="mt-8 grid gap-5 md:grid-cols-2">
                  {c.groups.map((g) => (
                    <div key={g.role} className="rounded-2xl border border-bone/10 p-6">
                      <span className="mb-3 block h-2 w-2 rounded-full bg-ember" />
                      <p className="text-base font-semibold leading-snug">{g.role}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {g.links.map((l) => (
                          <a
                            key={l.href}
                            href={l.href}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-violet/40 bg-violet/10 px-4 py-2 text-sm transition-colors hover:bg-violet/25"
                          >
                            {l.label}
                            <ArrowUpRight className="h-4 w-4 text-violet-soft" />
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {c.note ? (
                  <p className="mt-7 border-l-2 border-violet pl-6 text-base text-mute">{c.note}</p>
                ) : null}

                {c.extra ? (
                  <div className="mt-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-soft">
                      {c.extra.title}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {c.extra.items.map((i) => (
                        <span
                          key={i}
                          className="rounded-full border border-bone/10 bg-bone/[0.04] px-4 py-2 text-sm text-mute"
                        >
                          {i}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </Section>

        {/* Mercado e vendas */}
        <Section
          id="mercado"
          kicker="Mercado, mídia e vendas"
          title="Experiência que faz o conteúdo conversar com receita"
          lead="Além da produção, já rodei o outro lado do funil: mídia paga, prospecção, negociação e fechamento."
        >
          <div className="grid gap-5 md:grid-cols-2">
            {marketExperience.map((m) => (
              <Card key={m.title}>
                <p className="text-xs uppercase tracking-[0.18em] text-violet-soft">{m.meta}</p>
                <h3 className="mt-3 text-xl font-semibold">{m.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mute">{m.desc}</p>
              </Card>
            ))}
          </div>

          <div className="mt-14">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-soft">
              Cases comerciais
            </p>
            <div className="mt-6 grid gap-5 lg:grid-cols-3">
              {salesCases.map((s) => (
                <Card key={s.client}>
                  <h3 className="font-display text-xl font-bold">{s.client}</h3>
                  <p className="mt-2 text-xs uppercase tracking-[0.16em] text-mute">{s.niche}</p>
                  <p className="mt-4 text-sm leading-relaxed text-mute">{s.desc}</p>
                  <p className="mt-5 rounded-xl bg-violet/15 px-4 py-3 text-sm font-semibold text-bone">
                    {s.result}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </Section>

        {/* Formação e nichos */}
        <Section
          kicker="Formação e repertório"
          title="Estudo contínuo aplicado direto na entrega"
        >
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="grid gap-4 sm:grid-cols-2">
              {education.map((e) => (
                <div key={e.area} className="rounded-2xl border border-bone/10 px-6 py-5">
                  <p className="text-base font-semibold">{e.area}</p>
                  <p className="mt-1 text-sm text-mute">{e.source}</p>
                </div>
              ))}
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-soft">
                Segmentos atendidos
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {niches.map((n) => (
                  <span
                    key={n}
                    className="rounded-full border border-bone/10 bg-bone/[0.04] px-4 py-2 text-sm text-mute"
                  >
                    {n}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* Fit com a vaga */}
        <Section
          kicker="Por que eu para essa vaga"
          title="Social media estratégico para uma fundadora do mercado financeiro"
          lead="A vaga pede visão estratégica, creator economy, captação e edição com senso estético e rotina híbrida em São Paulo. É exatamente o desenho do meu trabalho."
        >
          <ul className="grid gap-4 md:grid-cols-2">
            {fitPoints.map((f) => (
              <li
                key={f}
                className="flex gap-4 rounded-2xl border border-bone/10 bg-bone/[0.03] p-6 text-base text-mute"
              >
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-ember" />
                {f}
              </li>
            ))}
          </ul>
        </Section>

        {/* Contato */}
        <section id="contato" className="relative overflow-hidden border-t border-bone/10 px-6 py-28 md:px-12 lg:px-20">
          <div className="pointer-events-none absolute -bottom-40 left-1/3 h-[520px] w-[520px] glow-violet opacity-30 blur-[100px]" />
          <div className="relative mx-auto max-w-6xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-soft">
              Vamos conversar
            </p>
            <h2 className="mt-6 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Pronto para construir a presença digital que gera negócio
            </h2>
            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              <a
                href={contact.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="group rounded-2xl border border-bone/10 bg-bone/[0.03] p-7 transition-colors hover:border-violet/50"
              >
                <MessageCircle className="h-6 w-6 text-violet-soft" />
                <p className="mt-5 text-xs uppercase tracking-[0.2em] text-mute">WhatsApp</p>
                <p className="mt-2 text-lg font-semibold">{contact.whatsappLabel}</p>
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="group rounded-2xl border border-bone/10 bg-bone/[0.03] p-7 transition-colors hover:border-violet/50"
              >
                <Mail className="h-6 w-6 text-violet-soft" />
                <p className="mt-5 text-xs uppercase tracking-[0.2em] text-mute">E-mail</p>
                <p className="mt-2 break-all text-lg font-semibold">{contact.email}</p>
              </a>
              <a
                href={linkedin}
                target="_blank"
                rel="noreferrer"
                className="group rounded-2xl border border-bone/10 bg-bone/[0.03] p-7 transition-colors hover:border-violet/50"
              >
                <Linkedin className="h-6 w-6 text-violet-soft" />
                <p className="mt-5 text-xs uppercase tracking-[0.2em] text-mute">LinkedIn</p>
                <p className="mt-2 text-lg font-semibold">Amado Kevin</p>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-bone/10 px-6 py-10 text-sm text-mute md:px-12 lg:px-20">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
          <p>Kevin Ferreira · Social Media Estratégico e Conteúdo</p>
          <Link to="/slides" className="transition-colors hover:text-bone">
            Ver portfólio em slides
          </Link>
        </div>
      </footer>
    </div>
  );
}
