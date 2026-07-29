## Objetivo

Montar o portfólio do Kevin para a vaga de Social Media (PJ) da Colmeia / @gabrielcsobral, em dois formatos:

1. **Slide interativo no navegador** — bonito, navegável com setas, links dos reels clicáveis.
2. **PDF baixável com os links funcionando** — gerado a partir do próprio deck (rota de impressão → "Salvar como PDF"), mais um PDF pronto para download entregue já nesta conversa.

## Estrutura do deck (7 slides)

1. **Capa** — Kevin Ferreira · Social Media & Conteúdo · foto (retrato com luz roxa/vermelha) · e-mail e WhatsApp
2. **Sobre mim** — foto do blazer + posicionamento: +3 milhões de seguidores somados, nichos beleza / fitness / educação · 4 pilares (Criação & Roteiro, Edição de Vídeo, Tendências & Formatos, IA na Criação)
3. **Como eu trabalho (IA)** — IA no processo: roteiro & copy, edição, imagem, organização/UX
4. **Case 01 — Gabriel Samra & Samra Academy** (2,6mi + 366mil) — beleza/balayage
   - Edição: 3 reels
   - Direção de gravação + copy + edição (captação/vendas): 2 reels
   - Gravação, edição e publicação: 1 reel
   - Gravação + edição com o time: 1 reel
5. **Case 02 — Samara Aquino** (212mil) — fitness, respiração e diástase
   - Edição + copy: 1 reel
   - Direção de gravação + edição: 1 reel
6. **Case 03 — NiceFit** — fitness
   - Gravação, direção e orientação de edição: 2 reels (inclui o DaP0UPfubBU)
7. **Contato / CTA** — "Vamos criar o próximo conteúdo que viraliza" + e-mail, WhatsApp (link wa.me), Instagram

Todos os 11 links de reels entram como botões clicáveis com rótulo do papel exercido. Nenhum número de views/engajamento será inventado — só os seguidores que aparecem nos prints.

## Design

Direção escura e editorial, puxando das duas fotos: preto profundo, luz roxa/violeta e um acento vermelho-âmbar, tipografia display condensada + sans limpa, cartões com borda sutil e gradiente. Nada de layout genérico — hierarquia forte, muito respiro, numeração de slide no canto.

## Técnico

- Slides em 1920×1080 com `SlideLayout` (scale para caber na tela), tokens `--slide-*` no `src/styles.css`.
- Rota `/` = deck; navegação por setas/teclado; modo tela cheia.
- Rota/param `?print` renderizando todos os slides empilhados com `@page` landscape → Cmd/Ctrl+P salva PDF **com hyperlinks preservados**.
- Fotos publicadas como assets do projeto (as duas enviadas).
- Além disso, gero e entrego aqui um arquivo `Kevin_Ferreira_Portfolio.pdf` em anexo, com os links dos reels clicáveis, para o Kevin já poder mandar por WhatsApp/e-mail.
- Metadados de página (title/description/OG) com o nome do Kevin.

## Observação

Se depois quiser incluir mais perfis/prints, é só mandar — os slides de case são componentes iguais, dá pra adicionar mais um em minutos.
