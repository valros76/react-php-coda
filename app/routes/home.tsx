import type { Route } from "./+types/home";
import AddPerso from "~/components/AddPerso/AddPerso";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Accueil" },
    { name: "description", content: "Bienvenue sur l'application React PHP Coda." },
  ];
}

export default function Home() {
  return <>
    <AddPerso/>
  </>;
}
