import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar'
import ProductCard from './components/ProductCard'


function App() {
  return (
    <section>
       <Navbar/>
    

    <section>
      <h1>Bienvenido Anye Rangel</h1>
      <h2>Programadora de WebUI</h2>
      <h3>CESDE Bogotá</h3>
    </section>

    <ProductCard title="Laptop" price={2000} />
    <ProductCard title="Mouse" price={50} />
    <ProductCard title="Teclado" price={100} />

    </section>
  )
}

export default App
