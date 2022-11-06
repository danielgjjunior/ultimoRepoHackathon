import React from 'react'
import {Header} from '../../components/header/Header';
import './home.css'


export function Home(){
    return (
    
    <div className='containerGlobal'>
      <Header />

      <h1>Tipo de atendimento:</h1>
      <form action="/tickets">
        <div className='listContainer'> 
          <div className="listTipos" >
            <input type='radio' name="atend" />
            <span>Fósforo</span>
          </div>
          <div className="listTipos" >
            <input type='radio' name="atend" />
            <span>Gesso</span>
          </div>
          <div className="listTipos" >
            <input type='radio' name="atend" />
            <span>Água</span>
          </div>
          <div className="listTipos" >
            <input type='radio' name="atend" />
            <span>Água</span>
          </div>
          <div className="listTipos" >
            <input type='radio' name="atend" />
            <span>Água</span>
          </div>
          <div className="listTipos" >
            <input type='radio' name="atend" />
            <span>Água</span>
          </div>
        </div>
        <input type="submit" value="Próximo" className='containerBtn' />
      </form>
    </div >
  )
}