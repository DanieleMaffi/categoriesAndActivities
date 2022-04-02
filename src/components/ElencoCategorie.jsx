import React, {useState, useEffect,useContext} from "react"
import {CategoryCtx} from "../contextCategoria"
import {AttivitaCtx} from "../contextAttivita"

const CancellaCategoria = (id) =>{
  console.log("cancello categoria: " + id)
  	fetch(`https://faithfuldeterminedcondition.maffidaniele.repl.co/categorie/${id}`, {
      method: "DELETE",
      headers:{
        "Content-Type": "application/json"
      }
    })
}

const CategoriaElement = ({element}) => {
  const {AggiornaCategorie} = useContext(CategoryCtx)
  const {AggiornaActivities} = useContext(AttivitaCtx)
  const {RecuperaAttivita} = useContext(AttivitaCtx)
  return (
    <div className="element">
      <button onClick={() => {RecuperaAttivita(element.id)}}>{element.nome}</button>
      <button className="submit" onClick={() =>{CancellaCategoria(element.id); AggiornaCategorie()}}>
        <div id="underline"></div>
        <a>x</a>
      </button>
    </div>
  )
}

const ElencoCategorie = () => {
  
  const {categorie,setCategorie,AggiornaCategorie} = useContext(CategoryCtx)
  useEffect(
    ()=>{
      AggiornaCategorie()
    },
    []
  )
  
  return (
    <>
      <h2>Elenco Categorie</h2>
      {categorie.map((categoria, pos) => <CategoriaElement key={pos} element={categoria}/>)}
    </>
  )
}

export default ElencoCategorie