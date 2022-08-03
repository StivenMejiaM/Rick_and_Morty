import React from 'react'
import { Input } from '../../IU/Input/Input'
import { Character } from '../../IU/Character/Character'
import { useState,useEffect } from 'react'

export const Main = () => {

  const URL = 'https://rickandmortyapi.com/api/character/';  
  const findCharacter = "?name=";
  const [personajes, setpersonajes] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then(response => response.json())
      .then(data => setpersonajes(data.results))
  },[]);
    
   const getData = async (event) => {
    const name = event.target.value;
    const url = `${URL}${findCharacter}${name}`;
    const res = await fetch(url);
    const data = await res.json();
    setpersonajes(data.results);
  }

  const [texto, setTexto] = useState('')

  const personajesfiltrados = personajes.filter(personaje => personaje.name.toLowerCase().includes(texto.toLowerCase())) 

  return (
    <main className='render'>
      <Input texto={texto} setTexto={setTexto}/>
      <Character personajes={personajesfiltrados}/>
    </main>
  )
}