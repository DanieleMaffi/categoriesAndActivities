import React,{useState} from 'react';
import './App.css'
import ElencoCategorie from "./components/ElencoCategorie"
import CreaCategoriaForm from "./forms/CreaCategoriaForm"
import ElencoAttivita from "./components/ElencoAttivita"
import CreaAttivitaForm from "./forms/CreaAttivitaForm"
import {CategoryCtx} from "./contextCategoria"
import {AttivitaCtx} from "./contextAttivita"

function App() {
  const [categorie,setCategorie] = useState([])
  const [attivita,setActivities] = useState([])
  const AggiornaCategorie = () =>fetch("https://faithfuldeterminedcondition.maffidaniele.repl.co//categorie").then(r => r.json()).then(body =>setCategorie(body))
  const AggiornaActivities = () =>fetch("https://faithfuldeterminedcondition.maffidaniele.repl.co/attivita").then(r => r.json()).then(body =>setActivities(body))
  
  return (
    <main>
      <CategoryCtx.Provider value={{
          categorie,
          setCategorie,
          AggiornaCategorie
        }}>
          <AttivitaCtx.Provider value={{
            attivita,
            setActivities,
            AggiornaActivities
          }}>
          <div className='form-container'>
            <div><CreaCategoriaForm/></div>
            <div><CreaAttivitaForm/></div>
          </div>
          <div className='list-container'>
            <div className='card'><ElencoCategorie /></div>
            <div className='card'><ElencoAttivita/></div>
          </div>
        </AttivitaCtx.Provider>
      </CategoryCtx.Provider>  
    </main>
  );
}

export default App;