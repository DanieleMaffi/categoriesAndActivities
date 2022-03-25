import React, {useState,useContext} from "react"
import {CategoryCtx} from "../contextCategoria"

const CreaCategoriaForm = () => {
  const [categoria,setCategoria] = useState("")
  const {setCategorie} = useContext(CategoryCtx)

  const creaCategoria=()=>{
    fetch("https://FaithfulDeterminedCondition.maffidaniele.repl.co/categorie", {
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        nome: categoria
      })
    }).then(() => {setCategorie(
      vecchioStato => {
        return [...vecchioStato,{nome:categoria}]
      }
    )})
  }
  
  return (
    <div className="input-container">
      <input className="form effect-9" type="text" placeholder="categoria" value={categoria} onChange={(e) => setCategoria(e.target.value)}/>
      <span className="focus-border">
        <i></i>
      </span>
      <button className="submit" onClick={creaCategoria}>Aggiungi categoria</button>
    </div>
  )
}

export default CreaCategoriaForm