import React from 'react'
import { Cards } from '../Cards/Cards'

export const Character = ({personajes}) => {
  return (
    <div>
       {personajes.map(personaje => <Cards personaje={personaje}/>)}
    </div>
  )
}
