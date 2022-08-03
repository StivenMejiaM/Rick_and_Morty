import React from 'react'

export const Input = ({texto,setTexto}) => {
    
    const handledinput = ({target}) => {
        setTexto(target.value)
    }


  return (
    <form  className="container">
        <h1>Search: </h1>
        <input  className='search' onChange={handledinput} value={texto} type="text" placeholder='Ingrese el nombre del personaje....'/>
    </form>
  )
}
