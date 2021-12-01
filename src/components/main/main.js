import React from 'react'

import './Main.css'

import ZodiacCard from '../Zodiac-card/ZodiacCard'
import { zodiac } from '../../data'
import background from '../../background.png'

export default function Main() {
  return (
    <main className="background" style={{ backgroundImage: `url(${background})` }}>
      {zodiac.map((symbol) => {
        ;<ZodiacCard key={symbol.name} {...symbol} />
      })}
    </main>
  )
}
