import React, {useState, useEffect,useContext} from "react"
import {CategoryCtx} from "../contextCategoria"

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
  return (
    <div className="element">
      {element.nome} 
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
      {categorie.map((categoria,pos) => <CategoriaElement key={pos} element={categoria}/>)}
    </>
  )
}

export default ElencoCategorie