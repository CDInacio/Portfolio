export const LINKS = [
  { text: "Home", path: "" },
  { text: "Sobre", path: "/sobre" },
  // { text: "Projetos" },
  // { text: "Contato" },
];

export const PROJECTS: Project[] = [
  {
    id: "p1",
    done: true,
    name: "League of Legends Quiz",
    image: "/images/quiz.jpg",
    description:
      "Este projeto é um quiz relacionado ao universo do jogo League of Legends, onde os jogadores e fãs do jogo podem acessar o site para testar seu conhecimento sobre o jogo.",
    stacks: ["next", "typescript", "tailwind"],
    demo: "https://league-of-quiz-five.vercel.app/",
    code: "https://github.com/CDInacio/league-of-legends-quiz",
  },
  {
    id: "p2",
    done: true,
    name: "Bookmark landing page",
    image: "/images/landing page.png",
    description:
      "Este projeto é uma landing page desenvolvida como parte de um desafio proposto pelo site Frontend Mentor. A página tem como objetivo apresentar informações e funcionalidades relacionadas a um serviço ou produto fictício chamado Bookmark.",
    stacks: ["next", "typescript", "tailwind"],
    demo: "https://bookmark-7epbia9ts-cdinacio.vercel.app/",
    code: "https://github.com/CDInacio/Bookmark-Landing-Page",
  },
  {
    id: "p4",
    done: true,
    name: "Previsões",
    image: "/images/weather.jpg",
    description:
      "Este projeto oferece aos usuários a capacidade de consultar informações atualizadas sobre a previsão do tempo de cidades em todo o mundo. Os usuários podem inserir o nome da cidade desejada e, em seguida, receberão dados precisos sobre as condições meteorológicas para essa cidade.",
    stacks: ["react", "typescript", "tailwind", "react query"],
    demo: "https://previsoes-mu.vercel.app/",
    code: "https://github.com/CDInacio/weather-app",
  },
  {
    id: "p5",
    done: true,
    name: "Countries",
    image: "/images/countries.jpg",
    description:
      "Esse projeto foi um desafio encontrado no site Front-end Mentor, onde eu deveria fazer o consumo de uma API para disponibilizar informações sobre países, além de replicar o desing e criar uma funcionalidade de dark mode.",
    stacks: ["react", "typescript", "tailwind"],
    demo: "https://countries-lilac.vercel.app/",
    code: "https://github.com/CDInacio/REST-Countries-API-with-color-theme-switcher",
  },
  {
    id: "p6",
    done: true,
    name: "Movie and Series Finder",
    image: "/images/movies.jpg",
    description:
      "Utilizando a  OMDb API, neste projeto você pode pesquisar pelo filme e série que quiser, e também ver informações detalhadas sobre ele. Este foi meu primeiro projeto usando o bundler Vite, que se tornou a forma mais popular de criar projetos react.",
    stacks: ["react", "tailwind"],
    demo: "https://movie-and-series-finder.vercel.app/",
    code: "https://github.com/CDInacio/movie-and-series-finder",
  },
  // {
  //   id: "p7",
  //   done: true,
  //   name: "Know Your Calories",
  //   image: "/images/calories.png",
  //   description:
  //     "Este projeto surgiu a partir de uma curiosidade sobre como programar em react Native. Nele, você pode ver as informações nutricionais de diversos tipos de alimentos; além de poder ver e contar a distribuição calóricas dos mesmos.",
  //   stacks: ["react Native", "tailwind"],
  //   demo: "https://www.youtube.com/shorts/d7D580pSWM8",
  //   code: "https://github.com/CDInacio/food-mobile-app",
  // },
];
