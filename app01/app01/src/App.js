import React from 'react'
import Logo from './componentes/imgs/noite.jpg'

export default function App(){
  const canal=()=>{
    return ('CFB Cursos')
  }
  function curso(){
    return "Curso React"
  }
 return (
  <section>
    <h1>bom dia</h1>
    <p>{'Canal: ' + canal()}</p>
    <p>{curso()}</p>    
    <img src={Logo}></img>
  </section>
 )
}