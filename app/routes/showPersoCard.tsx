import { useState } from "react";
import type { Route } from "../+types/root";
import type { PersoI } from "~/shared/interfaces/Perso.interface";

export async function loader({ params }: Route.LoaderArgs) {
  /**
   * L'argument params va stocker les QueryStrings (ici: id).
   */
}

export default function ShowPersoCard({
  params,
}: Route.ComponentProps) {
  const { id } = params;

  const [perso, setPerso] = useState<PersoI>({
    pseudo: undefined,
    title: undefined,
    job: undefined,
    stats: {
      strength: 0,
      dexterity: 0,
      luck: 0,
      intelligence: 0,
      wisdom: 0,
    }
  });

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
        onChange={(e) => {
          let newPseudo = e.target.value ?? null;
          setPerso((perso) => {
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
        onChange={(e) => {
          let newTitle = e.target.value ?? null;
          setPerso((perso) => {
            perso.title = newTitle;
            return perso;
          });
        }}
        required
      />
      <label htmlFor="class">Choix de la classe</label>
      <select
        name="class"
        defaultValue={classPerso}
        onChange={(e) => {
          setPerso((perso) => {
            setClassPerso(e.target.value);
            perso.job = e.target.value;
            randomStats(classPerso);
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
        {options.map((item) => (
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
        value={perso.stats.strength}
        min={perso.stats.strength}
        max={perso.stats.strength}
        required
      />
      <label htmlFor="stat_dexterity">Agilité</label>
      <input
        type="number"
        name="stat_dexterity"
        value={perso.stats.dexterity}
        min={perso.stats.dexterity}
        max={perso.stats.dexterity}
        required
      />
      <label htmlFor="stat_luck">Chance</label>
      <input
        type="number"
        name="stat_luck"
        value={perso.stats.luck}
        min={perso.stats.luck}
        max={perso.stats.luck}
        required
      />
      <label htmlFor="stat_intelligence">
        Intelligence
      </label>
      <input
        type="number"
        name="stat_intelligence"
        value={perso.stats.intelligence}
        min={perso.stats.intelligence}
        max={perso.stats.intelligence}
        required
      />
      <label htmlFor="stat_knowledge">Sagesse</label>
      <input
        type="number"
        name="stat_knowledge"
        value={perso.stats.wisdom}
        min={perso.stats.wisdom}
        max={perso.stats.wisdom}
        required
      />
      <input type="hidden" value={id} name="id" />
      <button type="submit">Créer</button>
    </form>
  );
}
