class Senha {
    format;
    numero;
    sigla;
    servico;
    fila;
    status;
} ;

async function gerarSenha() {

    let senha = new Senha()
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

    console.log(senha)

    return (senha)
}

function calcularFila() {

    var mysql = require('mysql');

    var con = mysql.createConnection({
        host: "localhost",
        user: "sgauser",
        password: "SenhaNovoSGA"
    });

    con.connect(function (err) {
        con.query("SELECT * from atendimentos where dt_cha is not NULL", function (err, result) {
            console.log("Result: " + result);
        })
    })
}