import React from 'react'
import '../../styles/main.css'
import './tickets.css'
import { Header } from '../../components/header/Header';
import {Button} from '../../components/button/Button';

export function Tickets(){
    return (
    <div id='masterContainer'>
        <Header></Header>
        <h1>Sua senha é:</h1>
        <div className='passContainer'>
            <h1 id='password'>A000</h1>
        </div>
        <p className='queueStatus'>Há 7 pessoas na sua frente</p>
        <a href="#">
            <Button title="Salvar senha na galeria" bg="#68A63C"/>
        </a>
        <a href="/rate">
            <Button title="Desistir" bg="#E4E4E7" color="#3F3F42"/>
        </a>
    </div>
    );
}