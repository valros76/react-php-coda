import { useState } from "react";
import { useNavigate } from "react-router";


export default function DeletePerso(){

  let navigate = useNavigate();

  let [id, setId] = useState(undefined);

  const submitDeleteForm = async () => {
    await fetch("http://127.0.0.1:5500/perso/delete", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: id
      })
    })
    .then(response => response.json())
    .then(datas => {
      if(datas.status !== 200){
        throw new Error("Le statut de la requête n'est pas valide.");
      }
      navigate("/");
    })
    .catch(err => console.error(err));
  }

  return(
  <form
    method="POST"
    onSubmit={submitDeleteForm}
  >
    <input type="hidden" value={id} name="id" />
    <button type="submit">
      Supprimer
    </button>
  </form>
  );
}