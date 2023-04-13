export const STACKS = [
  {
    id: "stk1",
    stack: "HTML5",
    color: "#F75421",
    description:
      "HTML (Linguagem de Marcação de HiperTexto) é o bloco de construção mais básico da web. Define o significado e a estrutura do conteúdo da web. Outras tecnologias além do HTML geralmente são usadas para descrever a aparência/apresentação (CSS) ou a funcionalidade/comportamento (JavaScript) de uma página da web.",
  },
  {
    id: "stk2",
    color: "#254BDD",
    stack: "CSS3",
    description:
      "CSS (Cascading Style Sheets ou Folhas de Estilo em Cascata) é uma linguagem de estilo  usada para descrever a apresentação de um documento escrito em HTML ou em XML (incluindo várias linguagens em XML como SVG, MathML ou XHTML). O CSS descreve como elementos são mostrados na tela, no papel, na fala ou em outras mídias.",
  },
  {
    id: "stk3",
    color: "#000000",
    stack: "JavaScript",
    description:
      "JavaScript (às vezes abreviado para JS) é uma linguagem leve, interpretada e baseada em objetos com funções de primeira classe, mais conhecida como a linguagem de script para páginas Web, mas usada também em vários outros ambientes sem browser, tais como node.js, Apache CouchDB e Adobe Acrobat. O JavaScript é uma linguagem baseada em protótipos, multi-paradigma e dinâmica, suportando estilos de orientação a objetos, imperativos e declarativos (como por exemplo a programação funcional). Saiba mais sobre o JavaScript.",
  },
  {
    id: "stk4",
    stack: "Tailwind CSS",
    color: "#07B0CE",
    description:
      "O Tailwind CSS é um framework CSS de código aberto que permite criar rapidamente estilos personalizados para seus projetos. Diferentemente de outros frameworks CSS, que possuem estilos pré-definidos para você escolher, o Tailwind CSS fornece classes que podem ser combinadas para criar seus próprios estilos. Essas classes são agrupadas em grupos de funcionalidades, como cores, tipografia, layout e muito mais.",
  },
  {
    id: "stk5",
    stack: "React",
    color: "#48CEF7",
    description:
      "React é um framework JavaScript criado pelo Facebook (atual Meta) que é usado para criar interfaces de usuário (UI) em aplicativos web. Ele é popular por ser fácil de usar, altamente flexível e escalável, e é usado por muitas empresas de tecnologia, incluindo o Facebook, Instagram e Airbnb.",
  },
  {
    id: "stk6",
    stack: "Next.js",
    color: "#1C252A",
    description:
      "O Next.js é um framework JavaScript de código aberto que permite criar aplicativos da Web e sites estáticos de alta performance. Ele foi projetado para tornar o desenvolvimento de aplicativos da Web universalmente escaláveis mais fácil, o que significa que os aplicativos são executados tanto no lado do servidor quanto no lado do cliente — e isso pode melhorar significativamente o tempo de carregamento e a experiência do usuário. ",
  },
];

export const LINKS = [
  { text: "Home" },
  { text: "Sobre" },
  { text: "Projetos" },
];

export const PROJECTS = [
  {
    id: "p1",
    done: true,
    name: "Portfólio",
    image: "/images/portfolio.png",
    description:
      "Como meu portfólio também é um projeto pessoal, decidi coloca-lo aqui. Ele foi feito com Next.js, para que eu consiga ter uma melhor indexação pelos mecanismos de pesquisa, uma vez que o site é renderizado no servidor e entregue pronto para o lado do cliente.",
    stacks: ["Next.js", "Tailwind CSS", "Framer Motion"],
    demo: "https://previsoes-mu.vercel.app/",
    code: "https://github.com/CDInacio/Portfolio",
  },
  {
    id: "p2",
    done: true,
    name: "Previsões",
    image: "/images/weather.png",
    description:
      "Projeto feito para buscar informações relevantes sobre o clima de uma determinada cidade, com a possibilidade de alterar entre o tema claro e escuro. Além disso, foi o primeiro projeto onde utilizei uma forma diferente de buscar dados de uma API.",
    stacks: ["React", "TypeScript", "Tailwind CSS", "React Query"],
    demo: "https://previsoes-mu.vercel.app/",
    code: "https://github.com/CDInacio/weather-app",
  },
  {
    id: "p3",
    done: false,
    name: "Landing Page padaria",
    image: "/images/landingpage.png",
    description: "Projeto ainda em desenvolvimento...",
    stacks: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "p4",
    done: true,
    name: "Countries",
    image: "/images/countries.png",
    description:
      "Esse projeto foi um desafio encontrado no site Front-end Mentor, onde eu deveria fazer o consumo de uma API para disponibilizar informações sobre países, além de replicar o desing e criar uma funcionalidade de dark mode.",
    stacks: ["React", "TypeScript", "Tailwind CSS"],
    demo: "https://countries-lilac.vercel.app/",
    code: "https://github.com/CDInacio/REST-Countries-API-with-color-theme-switcher",
  },
  {
    id: "p5",
    done: true,
    name: "Movie and Series Finder",
    image: "/images/movieFinder.png",
    description:
      "Utilizando a  OMDb API, neste projeto você pode pesquisar pelo filme e série que quiser, e também ver informações detalhadas sobre ele. Este foi meu primeiro projeto usando o bundler Vite, que se tornou a forma mais popular de criar projetos React.",
    stacks: ["React", "Tailwind CSS"],
    demo: "https://movie-and-series-finder.vercel.app/",
    code: "https://github.com/CDInacio/movie-and-series-finder",
  },
  {
    id: "p6",
    done: true,
    name: "Know Your Calories",
    image: "/images/calories.png",
    description:
      "Este projeto surgiu a partir de uma curiosidade sobre como programar em React Native. Nele, você pode ver as informações nutricionais de diversos tipos de alimentos; além de poder ver e contar a distribuição calóricas dos mesmos.",
    stacks: ["React Native", "Tailwind CSS"],
    demo: "https://www.youtube.com/shorts/d7D580pSWM8",
    code: "https://github.com/CDInacio/food-mobile-app",
  },
];
