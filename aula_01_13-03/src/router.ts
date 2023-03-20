import { Router } from "express";

const router = Router();

router.get('/', function (req, res) {
    res.send({
        api_name: 'api-contatos',
        descricao: 'API para gestão de contatos',
        status: 'OK',
    });
});

router.get('/sobre', function (req, res) {
    res.send({
        name: 'João Teixeira',
        email: 'joao.teixeira@ifro.edu.br',
        github: 'github.com/joaoteixeira'
    });
});

router.post('/contato', function (req, res) {
    let ok = true;
    let mensagem = "Contato salvo com sucesso!";

    /*
    if (req.body.nome == undefined) {
        mensagem = "A propriedade [nome] está indefinida!";
    } else if(req.body.nome == "") {
        mensagem = "A propriedade [nome] não deve estar em branco!";
    } else {
        mensagem = "O contato [" + req.body.nome + "] foi salvo com sucesso!";
        ok = true;
    }
    */
    // if (req.body.nome == undefined || req.body.nome == "") {
    //    if(req.body.nome == "") {
    //     mensagem = "A propriedade [nome] não deve estar em branco!";
    //    }

    // } else {
    //     mensagem = "O contato [" + req.body.nome + "] foi salvo com sucesso!";
    //     ok = true;
    // } 

    const inputs = [
        {
            name: "nome",
            message: "A propriedade [nome] não deve estar em indefinida/vazio!"
        },
        {
            name: "email",
            message: "A propriedade [email] não deve estar em indefinida/vazio!"
        }
    ];

    const checkValidate = isValidateObjectRequest(req, inputs);

    console.log(checkValidate);

    if (Array.isArray(checkValidate)) {
        ok = false;

        mensagem = checkValidate.join(', ');
    }

    res.send({
        success: ok,
        message: mensagem
    })
});

function isValidateRequest(req: any, inputs: string[]) {
    if (inputs.length == 0)
        return false;

    for (let i = 0; i < inputs.length; i++) {

        if (req.body[inputs[i]] == undefined || req.body[inputs[i]] == "")
            return false;
    }

    return true;
}

function isValidateObjectRequest(req: any, inputs: any[]) {
    let message = [];

    for (let i = 0; i < inputs.length; i++) {
        if (req.body[inputs[i].name] == undefined || req.body[inputs[i].name] == "") {
            message.push(inputs[i].message);
        }
    }

    return message.length == 0 ? true : message;
}

export default router;
