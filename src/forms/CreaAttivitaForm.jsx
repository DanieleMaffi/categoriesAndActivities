import React, {useState,useContext, useEffect} from "react"
import {AttivitaCtx} from "../contextAttivita"
import {CategoryCtx} from "../contextCategoria"

const CategoriaElement = ({element}) => {
  const {AggiornaCategorie} = useContext(CategoryCtx)
  useEffect(
    ()=>{
      AggiornaCategorie()
    },
    []
  )
  return (
    <option value={element.id}>{element.nome}</option>
  )
}

const RenderCategorie = () => {
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

const CreaAttivitaForm = () => {
  const [attivita,setAttivita] = useState({name: "", durata: "", categoria: 0})
  const {setActivities} = useContext(AttivitaCtx)

  const handleChange = (e) => {
    e.persist()

    setAttivita(prevAttivita => ({ ...prevAttivita, [e.target.name]: e.target.value, [e.target.durata]: e.target.value, [e.target.categoria]: e.target.value}))
  }

  const creaAttivita=()=>{
    fetch("https://faithfuldeterminedcondition.maffidaniele.repl.co/attivita", {
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        nome: attivita.name,
        durata: attivita.durata,
        id_categoria: attivita.categoria
      })
    }).then(() => {setActivities(
      vecchioStato => {
        return [...vecchioStato,{nome:attivita.name, durata:attivita.durata, id_categoria:attivita.categoria}]
      }
    )})
  }

  return (
    <div className="input-container">
      <select className="categoria" value={attivita.categoria} name="categoria" onChange={handleChange}>
      <option value="none" selected disabled hidden>Categoria</option>
        <RenderCategorie />
      </select>
      <input className="form effect-9" type="text" placeholder="attivita'" value={attivita.name} name="name" onChange={handleChange}/>
      <span className="focus-border">
        <i></i>
      </span>
      <button className="submit" onClick={creaAttivita}>Aggiungi Attivita</button>
    </div>
    
  )
}

export default CreaAttivitaForm