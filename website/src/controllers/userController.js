const userModel = require("../models/userModel")


// SIGN UP

function signUp(req, res) {
    
    const name = req.body.name;
    const passwd = req.body.passwd;


    if (!name || !passwd) {
        return res.status(400).json({ "msg:": "erro ao cadastrar" })
    } else {
        userModel.signUp(name, passwd)
            .then((response) => {
                return res.status(201).json({ "msg": "Usuário criado!", response })
            })
            .catch((error) => {
                return res.status(400).json({ "Erro": error })
            })
    }

}

// SIGN IN 

function signIn(req, res) {

    const name = req.body.name;
    const passwd = req.body.passwd;

    if (!name || !passwd) {
        return res.status(400).json({ "msg:": "erro ao cadastrar" })
    } else {
        userModel.signIn(name, passwd)
            .then((response) => {

                if (response[0] == undefined) {
                    return res.status(204).json({ "msg": "Usuário ou Senha estão incorretos!" })
                } else {
                    return res.status(200).json({ "msg": "Usuário autenticado", response })
                }

            })
            .catch((error) => { return res.status(400).json({ "msg": "error ao autenticar: " + error }) })
    }


}

module.exports = {
    signUp,
    signIn
}