class Departamento {
    id;
    nome;
    ativo;
} let departamentos = []

async function getDepartamentos() {

    const url = "https://sistemasga.nelltech.com.br/api/departamentos"
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
            let departamento = new Departamento();
            departamento.id = element.id
            departamento.nome = element.nome
            departamento.ativo = element.ativo
            departamentos.push(departamento)
        });
    });
}