import React from 'react'
import logo from './logo.svg'
import './App.css'

import { Header } from './App.components/Header/Header.controller'
import { Footer } from './App.components/Footer/Footer.controller'

const App = () => {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Mantis is a free data annotation tool for computer vision datasets. <a href="#">Get started</a>
        </p>
      </header>
      <Footer />
    </div>
  )
}

export default App
