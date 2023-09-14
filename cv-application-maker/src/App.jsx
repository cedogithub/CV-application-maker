import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Experience from './components/Experience'
import Education from './components/Education'
import GeneralInfo from './components/GeneralInfo'

function App() {

  return (
    <>
    <Experience/>
    <Education/>
    <GeneralInfo/>
    </>
  )
}

export default App
