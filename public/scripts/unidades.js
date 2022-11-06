class Unidade {
    id;
    nome;
    ativo;
} let unidades = []

async function getUnidades() {
    
    const url = "https://sistemasga.nelltech.com.br/api/unidades"
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
            let unidade = new Unidade();
            unidade.id = element.id
            unidade.nome = element.nome
            unidade.ativo = element.ativo
            unidades.push(unidade)
        });
    });
}