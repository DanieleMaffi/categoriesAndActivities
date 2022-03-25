import React, {useState,useContext} from "react"
import {AttivitaCtx} from "../contextAttivita"



const CreaAttivitaForm = () => {
  const [attivita,setAttivita] = useState("")
  const {setActivities} = useContext(AttivitaCtx)

  const creaAttivita=()=>{
    fetch("https://faithfuldeterminedcondition.maffidaniele.repl.co/attivita", {
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        nome: attivita
      })
    }).then(() => {setActivities(
      vecchioStato => {
        return [...vecchioStato,{nome:attivita}]
      }
      
    )})
  }

  
  return (
    <div className="input-container">
      <input className="form effect-9" type="text" placeholder="attivita'" value={attivita} onChange={(e) => setAttivita(e.target.value)}/>
      <span className="focus-border">
        <i></i>
      </span>
      <button className="submit" onClick={creaAttivita}>Aggiungi Attivita</button>
    </div>
    
  )
}

export default CreaAttivitaForm