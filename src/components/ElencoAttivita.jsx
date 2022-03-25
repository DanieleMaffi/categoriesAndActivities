import React, {useState, useEffect,useContext} from "react"
import {AttivitaCtx} from "../contextAttivita"


const CancellaAttivita = (id) =>{
  console.log("cancello attivita: " + id)
  fetch(`https://faithfuldeterminedcondition.maffidaniele.repl.co//attivita/${id}`, {
      method: "DELETE",
      headers:{
        "Content-Type": "application/json"
      }
    })
}

const AttivitaElement = ({element}) => {
  const {AggiornaActivities} = useContext(AttivitaCtx)
  const [editing, setEditing] = useState(false)
  return (
    <div className="element">
      {element.nome} 
      <button className="submit" onClick={() =>{CancellaAttivita(element.id); AggiornaActivities()}}>
        <div className="underline"></div>
        <a>x</a>
      </button>
    </div>  
  )
}




const ElencoAttivita = () => {
  
  const {attivita, setAttivita, AggiornaActivities} = useContext(AttivitaCtx)
  // viene eseguito al primo mount del componente
  useEffect(
    ()=>{
      AggiornaActivities()
    },
    []
  )

  
  return (
    <>
      <h2>Elenco Attivita</h2>
      {attivita.map((attivita,pos) => <AttivitaElement key={pos} element={attivita}/>)}
    </>
  )
}

export default ElencoAttivita