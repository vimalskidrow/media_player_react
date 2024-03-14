import { useState } from 'react'
import './App.css'
import './bootstrap.min.css'
import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'
import History from './pages/History'

import { Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'


function App() {

  return (
    <>
      <Header />
      <Routes>


        {/* localhost:5173 */}


        <Route path='/' Component={Landing} />
        <Route path='/dash' Component={Dashboard} />
        <Route path='/his' Component={History} />

      </Routes>

      <Footer />
    </>
  )
}

export default App
