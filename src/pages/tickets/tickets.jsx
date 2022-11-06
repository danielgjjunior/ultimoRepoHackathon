import React, { useEffect, useState } from 'react'
import '../../styles/main.css'
import './tickets.css'
import { Header } from '../../components/header/Header';
import { Button } from '../../components/button/Button';
import { useSubmit } from 'react-router-dom';

const a = "teste"

export function Tickets() {

    class Senha {
        format;
        numero;
        sigla;
        servico;
        fila;
        status;
    }; let senha = new Senha()


    async function gerarSenha() {

        senha.servico = 1;
        senha.status = 1

        const url = "https://sistemasga.nelltech.com.br/api/distribui"
        /*
        Status senha
        1 - nova senha
        2 - senha atendida
        3 - senha cancelada
        */

        let token = await getToken()

        const options = {
            method: 'POST',
            headers: {
                cookie: 'PHPSESSID=c1gjkjr606h9h1q1qqt01cs8d6',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token
            },
            body: '{"unidade":1,"servico":' + senha.servico + ',"prioridade":1,"cliente":{"nome":"","documento":""}}'
        };

        let result = await fetch(url, options)
            .then(response => response.json())
            .then(response => response)
            .catch(err => console.error(err));

        result = result.senha

        senha.format = result.format
        senha.numero = result.numero
        senha.sigla = result.sigla

        console.log(senha.format)

        setFormat(senha.format)
    }

    const [format, setFormat] = useState("");

    if (format == "") {
        gerarSenha()
    }

    return (

        <div id='masterContainer'>
            <Header></Header>
            <h1>{a}</h1>
            <h1>Sua senha é:</h1>
            <div className='passContainer'>
                <h1 id='password'>{format}</h1>
            </div>
            <p className='queueStatus'>Há 7 pessoas na sua frente</p>
            <a href="#">
                <Button title="Salvar senha na galeria" bg="#68A63C" />
            </a>
            <a href="/rate">
                <Button title="Desistir" bg="#E4E4E7" color="#3F3F42" />
            </a>
        </div>
    );
}