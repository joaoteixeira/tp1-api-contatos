import { Router } from "express";

const router = Router();

router.get('/', function(req, res) {
    res.send({
        api_name: 'api-contatos',
        descricao: 'API para gestão de contatos',
        status: 'OK',
    });
});

router.get('/sobre', function(req, res) {
    res.send({
        name: 'João Teixeira',
        email: 'joao.teixeira@ifro.edu.br',
        github: 'github.com/joaoteixeira'
    });
});

router.post('/contato', function(req, res) {
    let ok = false
    let mensagem = "A propriedade [nome] está indefinida!";

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
    if (req.body.nome == undefined || req.body.nome == "") {
       if(req.body.nome == "") {
        mensagem = "A propriedade [nome] não deve estar em branco!";
       }

    } else {
        mensagem = "O contato [" + req.body.nome + "] foi salvo com sucesso!";
        ok = true;
    }   

    res.send({
        success: ok,
        message: mensagem
    })
});

export default router;