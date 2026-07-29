export const contact = {
  name: "Kevin Ferreira",
  role: "Social Media & Criação de Conteúdo",
  email: "kevinferreria1301@gmail.com",
  whatsappLabel: "(24) 98176-4837",
  whatsappHref: "https://wa.me/5524981764837",
};

export type ReelGroup = {
  role: string;
  links: { label: string; href: string }[];
};

export type CaseStudy = {
  id: string;
  index: string;
  client: string;
  niche: string;
  summary: string;
  stats: { value: string; label: string }[];
  groups: ReelGroup[];
  note?: string;
};

export const cases: CaseStudy[] = [
  {
    id: "samra",
    index: "CASE 01",
    client: "Gabriel Samra & Samra Academy",
    niche: "Beleza · balayage e coloração",
    summary:
      "Digital creator e academia virtual de beleza. Atuei em conteúdo de marca pessoal e em conteúdo de captação e vendas para a academia.",
    stats: [
      { value: "2,6mi", label: "@gabrielsamra" },
      { value: "366mil", label: "@samracademy" },
    ],
    groups: [
      {
        role: "Edição",
        links: [
          { label: "Reel 1", href: "https://www.instagram.com/reel/Da0yCK8JYfq/" },
          { label: "Reel 2", href: "https://www.instagram.com/reel/Da3LOh3pKGZ/" },
          { label: "Reel 3", href: "https://www.instagram.com/reel/DanoyIRJXpL/" },
        ],
      },
      {
        role: "Direção de gravação + copy + edição · captação e vendas",
        links: [
          { label: "Reel de captação 1", href: "https://www.instagram.com/reel/DW4KaAYiYEv/" },
          { label: "Reel de captação 2", href: "https://www.instagram.com/reel/DWrgj6UiaSQ/" },
        ],
      },
      {
        role: "Gravação, edição e publicação",
        links: [{ label: "Ver reel", href: "https://www.instagram.com/reel/DZsNx9upChq/" }],
      },
      {
        role: "Gravação + edição em conjunto com o time",
        links: [{ label: "Ver reel", href: "https://www.instagram.com/reel/DZsvZWKR3zv/" }],
      },
    ],
  },
  {
    id: "samara",
    index: "CASE 02",
    client: "Samara Aquino",
    niche: "Fitness · respiração e diástase",
    summary:
      "Personal trainer com produtos digitais próprios. Entrega além da edição: também escrevi copy e dirigi o que gravar e como gravar.",
    stats: [{ value: "212mil", label: "@samaraquino_personal" }],
    groups: [
      {
        role: "Edição + copy",
        links: [{ label: "Ver reel", href: "https://www.instagram.com/reel/DNEZPo3pORv/" }],
      },
      {
        role: "Direção de gravação + edição",
        links: [{ label: "Ver reel", href: "https://www.instagram.com/reel/DNjHmyep2z6/" }],
      },
    ],
    note: "O foco aqui foi reter atenção nos primeiros segundos: gancho na copy, corte rápido e legenda que segura o scroll.",
  },
  {
    id: "nicefit",
    index: "CASE 03",
    client: "NiceFit",
    niche: "Fitness · marca",
    summary:
      "Assumi o processo inteiro: gravei, dirigi o que e como gravar e orientei a edição do início ao fim.",
    stats: [],
    groups: [
      {
        role: "Gravação, direção e orientação de edição",
        links: [
          { label: "Reel 1 · perfil NiceFit", href: "https://www.instagram.com/reel/DbL4fxvQoO9/" },
          { label: "Reel 2", href: "https://www.instagram.com/reel/DaP0UPfubBU/" },
        ],
      },
    ],
  },
];

export const pillars = [
  { n: "01", title: "Criação & Roteiro", desc: "Ideação, copy e direção de gravação" },
  { n: "02", title: "Edição de Vídeo", desc: "CapCut e Premiere, corte dinâmico pra retenção" },
  { n: "03", title: "Tendências & Formatos", desc: "Acompanhamento diário do que está performando" },
  { n: "04", title: "IA na Criação", desc: "Aplicada em roteiro, edição, imagem e organização" },
];

export const aiSteps = [
  {
    n: "01",
    title: "Roteiro & Copy",
    desc: "Estruturação de ideias, ganchos e legendas com apoio de IA generativa de texto.",
  },
  {
    n: "02",
    title: "Edição",
    desc: "Legenda automática, corte de silêncio e versões alternativas do mesmo vídeo pra testar.",
  },
  {
    n: "03",
    title: "Imagem & Referência",
    desc: "Geração de thumbs, capas e referências visuais antes de gravar.",
  },
  {
    n: "04",
    title: "Organização",
    desc: "Planejamento de calendário, briefing pro time e leitura rápida do que performou.",
  },
];
