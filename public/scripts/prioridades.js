class Prioridade {
    id;
    nome;
    ativo;
} let prioridades = []

async function getPrioridades() {
    
    const url = "https://sistemasga.nelltech.com.br/api/prioridades"
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
            let prioridade = new Prioridade();
            prioridade.id = element.id
            prioridade.nome = element.nome
            prioridade.ativo = element.ativo
            prioridades.push(prioridade)
        });
    });
}
