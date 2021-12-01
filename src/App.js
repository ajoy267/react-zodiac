import React from 'react'

import './App.css'

import Header from './components/top/Header'
import Footer from './components/bottom/Footer'
import Main from './components/center/Main'

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
