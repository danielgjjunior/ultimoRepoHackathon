import React, { Component } from 'react'
import '../../pages/home/home.css'

export function TiposServicos(element) {

    return (
        < div className="listTipos" key={element.id} >
            <input type='radio' name={element.nome} />
            <span>{element.nome}</span>
        </div >
    )
}