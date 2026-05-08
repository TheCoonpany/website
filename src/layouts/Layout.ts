import { printConsoleBadge, printConsoleImage } from "../_shared/console";

const lang = document.documentElement.lang;
const greeting = lang === 'en'
  ? "Hello, developer!"
  : "¡Hola, desarrollador!";

printConsoleBadge(greeting, {
  color: "#fff",
  "background-color": "#333",
  padding: "10px 20px",
  'font-size': "20px",
  display: 'inline-block',
  width: '150px',
});

printConsoleImage("/coding_raccoon.jpg");

const query = new URLSearchParams(window.location.search);
const flags = [...query.keys()];

if (flags.includes('no-motion')) {
  console.log(`'no-motion' mode on`);
  document.querySelector('body')?.setAttribute('data-no-motion', '');
}
