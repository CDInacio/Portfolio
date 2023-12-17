export const techIcons = [
  { text: "html" },
  { text: "css" },
  { text: "javascript" },
  { text: "git" },
  { text: "tailwind" },
  { text: "next" },
  { text: "react" },
];

export const projects: Project[] = [
  {
    id: 1,
    text: "Previsões",
    imagePath: "/images/weather.jpg",
    description:
      "Aplicação para consultar a previsão do tempo de qualquer cidade do mundo. Utilizando a API do WeatherAPI, é possível consultar a previsão do tempo de qualquer cidade do mundo. ",
    link: "https://previsoes-mu.vercel.app/",
    code: "https://github.com/CDInacio/weather-app",
    stack: ["Next.js", "Tailwind CSS", "TypeScript", "API"],
  },
  {
    id: 2,
    text: "League of Quiz",
    imagePath: "/images/quiz.jpg",
    description:
      "Quiz sobre o jogo League of Legends, com perguntas sobre o jogo e seus personagens. ",
    link: "https://league-of-quiz-five.vercel.app/",
    code: "https://github.com/CDInacio/league-of-legends-quiz",
    stack: ["React", "Tailwind CSS", "TypeScript"],
  },
  {
    id: 3,
    text: "Landing Page",
    imagePath: "/images/landing-page.jpg",
    description:
      "Landing page desenvolvida como parte de um desafio do site Frontend Mentor. O objetivo era desenvolver uma landing page responsiva, com o layout o mais próximo possível do design proposto.",
    link: "https://bookmark-landing-page-tau-nine.vercel.app/",
    code: "https://github.com/CDInacio/Bookmark-Landing-Page",
    stack: ["Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    id: 4,
    text: "Countries API com switch de tema",
    imagePath: "/images/countries.jpg",
    description:
      "Landing page desenvolvida como parte de um desafio do site Frontend Mentor. O objetivo era desenvolver uma landing page responsiva, com o layout o mais próximo possível do design proposto.",
    link: "https://countries-lilac.vercel.app/",
    code: "https://github.com/CDInacio/REST-Countries-API-with-color-theme-switcher",
    stack: ["React", "Tailwind CSS", "API"],
  },
];

export const contactIcons: ContactIconType[] = [
  { id: "1", text: "github", link: "https://github.com/CDInacio" },
  {
    id: "2",
    text: "linkedin",
    link: "https://www.linkedin.com/in/cl%C3%A1udio-dantas-520a1615b/",
  },
  {
    id: "3",
    text: "instagram",
    link: "https://www.instagram.com/devclaudio96/",
  },
];

export const links = [
  { id: 1, text: "Inicio" },
  { id: 2, text: "Sobre" },
  { id: 3, text: "Projetos" },
  { id: 4, text: "Contato" },
];

export const contacts = [
  {
    id: 1,
    text: "+55 99284-1955",
    icon: "phone",
    link: "https://api.whatsapp.com/send?phone=5531992841955",
  },
  {
    id: 2,
    text: "claudiodantas1996@gmail.com",
    icon: "email",
    link: "mailto:claudiodantas1996@gmail.com",
  },
  {
    id: 3,
    text: "João Monlevade, MG",
    icon: "local",
    link: "https://www.google.com.br/maps/place/Jo%C3%A3o+Monlevade,+MG/@-19.8317581,-43.198347,13z/data=!3m1!4b1!4m6!3m5!1s0xa5074732765415:0xe75615374cb9bb9a!8m2!3d-19.808204!4d-43.1735433!16s%2Fg%2F11bxfz0dwp?entry=ttu",
  },
];
