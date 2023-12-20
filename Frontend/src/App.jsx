import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Items from './pages/Items'
import {Signin} from './pages/Signin'
import Signup from './pages/Signup'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/items" element={<Items />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup/>} />
    </Routes>
  )
}

export default App
