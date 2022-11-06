import React, { Component } from 'react'
import { Header } from '../../components/header/Header';
import ReactDOM from 'react-dom'
import './home.css'

export function Home() {

  class Servicos {
    id;
    nome;
    ativo;
  }

  let servicos = []

  async function getServicos() {

    const url = "https://sistemasga.nelltech.com.br/api/servicos"
    let token = await getToken()

    const settings = {
      "async": true,
      "crossDomain": true,
      "url": url,
      "method": "GET",
      "headers": {
        "Authorization": "Bearer " + token

      }
    };
    $.ajax(settings).done(function (response) {
      response.forEach(element => {
        if (element.ativo == 1) {
          let serv = new Servicos();
          serv.id = element.id
          serv.nome = element.nome
          serv.ativo = element.ativo
          servicos.push(serv)
        } //fecha if
      });
    });
  }

  getServicos()
  console.log(servicos)

  return (

    <div className='containerGlobal'>
      <Header />

      <h1>Tipo de atendimento:</h1>
      <form action="/tickets">
        <div className='listContainer'>
            <div className="listTipos" key="1">
              <input type='radio' name='tipo' value="F" />
              <span>Fosforo</span>
            </div >
            < div className="listTipos" key="2">
              <input type='radio' name='tipo' value="G" />
              <span>Gesso</span>
            </div >
            < div className="listTipos" key="2">
              <input type='radio' name='tipo' value="C" />
              <span>Calcio</span>
            </div >
            < div className="listTipos" key="2">
              <input type='radio' name='tipo' value="M" />
              <span>Magnésio</span>
            </div >
        </div>
        <input type="submit" value="Próximo" className='containerBtn' />
      </form>
    </div >

  )
}



