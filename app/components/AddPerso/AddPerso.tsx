import { useEffect, useState, type FormEvent } from "react";

export interface PersoI {
  pseudo: string | null;
  title: string | null;
  class: string | null;
  stats: {
    force: number;
    dexterity: number;
    luck: number;
    intelligence: number;
    knowledge: number;
  };
}

export default function AddPerso() {
  /**
   * - Requêter l'API pour transmettre les données
   * - Afficher une confirmation de création de personnage
   * - Stocker les données en BDD
   * - Afficher la fiche du personnage
   * - Moduler les classes pour les rendre dynamiques
   * - Idée : Génération du pseudo/titre auto
   */

  let [perso, setPerso] = useState<PersoI>({
    pseudo: null,
    title: null,
    class: null,
    stats: {
      force: 0,
      dexterity: 0,
      luck: 0,
      intelligence: 0,
      knowledge: 0,
    },
  });

  let [options, SetOptions] = useState([
    {
      value: "warrior",
      name: "Guerrier",
    },

    {
      value: "priest",
      name: "Prêtre",
    },
    {
      value: "noob",
      name: "Noob",
    },
    {
      value: "warlock",
      name: "Démoniste",
    },
    {
      value: "rogue",
      name: "Voleur",
    },
  ]);

  let [classPerso, setClassPerso] = useState("noob");

  useEffect(() => {
    if (
      perso.stats.force <= 0 ||
      perso.stats.dexterity <= 0 ||
      perso.stats.intelligence <= 0 ||
      perso.stats.luck <= 0 ||
      perso.stats.knowledge <= 0
    ) {
      randomStats(classPerso);
      console.table(perso);
    }
  }, [perso]);

  let generateRandomIndex = (min: number, max: number) => {
    min = Math.ceil(min);

    max = Math.floor(max);

    let getRandomIndex = Math.floor(
      Math.random() * (max - min + 1) + min
    );
    return getRandomIndex;
  };

  const randomStats = (classPerso: string): any => {
    const MIN: number = 10;
    const MAX: number = 25;
    let range = {
      min: 0,
      max: 0,
    };

    switch (classPerso) {
      case "warlock":
        range = {
          min: MIN + (MAX - MIN) / 3,
          max: MAX,
        };
        break;
      case "priest":
        range = {
          min: MIN + (MAX - MIN) / 5,
          max: MAX - (MAX - MIN) / 3,
        };
        break;
      case "noob":
        range = {
          min: MIN,
          max: MAX - (MAX - MIN) / 1.5,
        };
        break;
      case "warrior":
      default:
        range = {
          min: MIN + (MAX - MIN) / 1.5,
          max: MAX,
        };
        break;
    }
    setPerso((perso) => {
      perso.stats = {
        force: generateRandomIndex(range.min, range.max),
        dexterity: generateRandomIndex(
          range.min,
          range.max
        ),
        luck: generateRandomIndex(range.min, range.max),
        intelligence: generateRandomIndex(
          range.min,
          range.max
        ),
        knowledge: generateRandomIndex(
          range.min,
          range.max
        ),
      };
      return perso;
    });
  };

  const submitForm = (e: FormEvent) => {
    e.preventDefault();
    console.table(perso);
    if (
      perso.pseudo === null ||
      perso.title === null ||
      perso.class === null ||
      perso.stats.force <= 0 ||
      perso.stats.dexterity <= 0 ||
      perso.stats.luck <= 0 ||
      perso.stats.intelligence <= 0 ||
      perso.stats.knowledge <= 0
    ) {
      throw new Error(
        "Une (ou plusieurs) statistique est invalide."
      );
    }

    fetch("#", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(perso),
    });
  };

  return (
    <form
      action="#"
      method="POST"
      onSubmit={submitForm}
    >
      <label htmlFor="pseudo">Pseudo</label>
      <input
        type="text"
        name="pseudo"
        onChange={(e) => {
          let newPseudo = e.target.value ?? undefined;
          if (newPseudo) {
            setPerso((perso) => {
              perso.pseudo = newPseudo;
              return perso;
            });
          } else {
            setPerso((perso) => {
              perso.pseudo = null;
              return perso;
            });
          }
        }}
        required
      />
      <label htmlFor="title">Titre</label>
      <input
        type="text"
        name="title"
        onChange={(e) => {
          let newTitle = e.target.value ?? undefined;
          if (newTitle) {
            setPerso((perso) => {
              perso.title = newTitle;
              return perso;
            });
          } else {
            setPerso((perso) => {
              perso.title = null;
              return perso;
            });
          }
        }}
        required
      />
      <label htmlFor="class">Choix de la classe</label>
      <select
        name="class"
        onChange={(e) => {
          setClassPerso(e.target.value);
          setPerso((perso) => {
            perso.class = classPerso;
            return perso;
          });
          randomStats(classPerso);
        }}
        required
      >
        <option
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
        value={perso.stats.force}
        min={perso.stats.force}
        max={perso.stats.force}
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
        value={perso.stats.knowledge}
        min={perso.stats.knowledge}
        max={perso.stats.knowledge}
        required
      />
      <button type="submit">Créer</button>
    </form>
  );
}
