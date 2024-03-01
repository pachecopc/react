import React from 'react'
import Logo from './componentes/imgs/noite.jpg'
import Tarde from './componentes/imgs/tarde.jpg'



export default function App(){
  const canal=()=>{
    return ('CFB Cursos')
  }
  function curso(){
    return "Curso React"
  }
 return (
  <section>
    <p>{'Canal: ' + canal()}</p>
    <p>{curso()}</p>
    <img src={Logo}></img>
    <img src={Tarde}></img>
  </section>
 )
}

