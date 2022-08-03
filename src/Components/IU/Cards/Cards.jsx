import React from 'react'

export const Cards = ({personaje}) => {
  return (
		<div className="hijo">
			<div className='carta'>
				<div className='personaje-header'></div>
				<div className='personaje-body'>
					<img className='foto' src={personaje.image} alt=""/>
					<h4>{personaje.name}</h4>
					<p> {personaje.species} <span>-</span> {personaje.gender}</p>
				</div>
			</div>
		</div>
  )
}
