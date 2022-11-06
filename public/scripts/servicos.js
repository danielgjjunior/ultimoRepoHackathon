class Servicos {
    id;
    nome;
    ativo;
} let servicos = []

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
            let serv = new Servicos();
            serv.id = element.id
            serv.nome = element.nome
            serv.ativo = element.ativo
            servicos.push(serv)
        });
    });
}