import React from 'react'

import './ZodiacCard.css'

export default function ZodiacCard(props) {
  return (
    <div className="zodiac-card">
      <img alt={props.name} src={`${process.env.PUBLIC_URL}/zodiacs/${props.name}.png`}></img>
      <div className="name">{props.name}</div>
      <div>{props.dates}</div>
    </div>
  )
}
