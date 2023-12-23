import React from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HeadLineCards from './components/HeadLineCards'
import Food from './components/Food'
import Card from './components/Card'

const App = () => {
  return (
    <div>
     
      <Navbar/>
      <Hero/>
      <HeadLineCards/>
      <Food/>
       <Card/>
     
    
    </div>
  )
}

export default App