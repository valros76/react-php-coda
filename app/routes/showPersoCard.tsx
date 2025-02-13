import { useState, useContext } from "react";
import type { Route } from "../+types/root";
import type { PersoI } from "~/shared/interfaces/Perso.interface";
import { PersoContext } from "~/shared/contexts/PersoContext";

export async function loader({ params }: Route.LoaderArgs) {
  /**
   * L'argument params va stocker les QueryStrings (ici: id).
   */
}

export default function ShowPersoCard({
  params,
}: Route.ComponentProps) {
  const { id } = params;

  let {MIN, MAX, perso, setPerso, jobs} = useContext(PersoContext);

  const submitUpdateForm = (e: any) => {
    e.preventDefault();
  };

  return (
    <form
      action="#"
      method="POST"
      onSubmit={submitUpdateForm}
    >
      <label htmlFor="pseudo">Pseudo</label>
      <input
        type="text"
        name="pseudo"
        defaultValue={perso.pseudo}
        onChange={(e) => {
          let newPseudo = e.target.value ?? null;
          setPerso((perso: PersoI) => {
            perso.pseudo = newPseudo;
            return perso;
          });
        }}
        required
      />
      <label htmlFor="title">Titre</label>
      <input
        type="text"
        name="title"
        defaultValue={perso.title}
        onChange={(e) => {
          let newTitle = e.target.value ?? null;
          setPerso((perso: PersoI) => {
            perso.title = newTitle;
            return perso;
          });
        }}
        required
      />
      <label htmlFor="class">Choix de la classe</label>
      <select
        name="class"
        defaultValue={perso.job}
        onChange={(e) => {
          setPerso((perso: PersoI) => {
            perso.job = e.target.value;
            return perso;
          });
        }}
        required
      >
        <option
          value=""
          selected
          disabled
        >
          -- Choisir une classe --
        </option>
        {jobs.map((item: any) => (
          <option
            value={item.value}
            key={`${item.name}-${item.value}`}
          >
            {item.name}
          </option>
        ))}
      </select>
      <label htmlFor="stat_force">Force</label>
      <input
        type="number"
        name="stat_force"
        defaultValue={perso.stats.strength}
        min={MIN}
        max={MAX}
        onChange={(e) => {
          setPerso((perso: PersoI) => {
            perso.stats.strength = Number(e.target.value);
            return perso;
          });
        }}
        required
      />
      <label htmlFor="stat_dexterity">Agilité</label>
      <input
        type="number"
        name="stat_dexterity"
        defaultValue={perso.stats.dexterity}
        min={MIN}
        max={MAX}
        onChange={(e) => {
          setPerso((perso: PersoI) => {
            perso.stats.strength = Number(e.target.value);
            return perso;
          });
        }}
        required
      />
      <label htmlFor="stat_luck">Chance</label>
      <input
        type="number"
        name="stat_luck"
        defaultValue={perso.stats.luck}
        min={MIN}
        max={MAX}
        onChange={(e) => {
          setPerso((perso: PersoI) => {
            perso.stats.strength = Number(e.target.value);
            return perso;
          });
        }}
        required
      />
      <label htmlFor="stat_intelligence">
        Intelligence
      </label>
      <input
        type="number"
        name="stat_intelligence"
        defaultValue={perso.stats.intelligence}
        min={MIN}
        max={MAX}
        onChange={(e) => {
          setPerso((perso: PersoI) => {
            perso.stats.strength = Number(e.target.value);
            return perso;
          });
        }}
        required
      />
      <label htmlFor="stat_knowledge">Sagesse</label>
      <input
        type="number"
        name="stat_knowledge"
        defaultValue={perso.stats.wisdom}
        min={MIN}
        max={MAX}
        onChange={(e) => {
          setPerso((perso: PersoI) => {
            perso.stats.strength = Number(e.target.value);
            return perso;
          });
        }}
        required
      />
      <input type="hidden" value={id} name="id" />
      <button type="submit">Créer</button>
    </form>
  );
}
