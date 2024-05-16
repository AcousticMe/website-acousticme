const database = require("../database/config")


// SIGN UP

function signUp(name, passwd) {
    const sql =
        `INSERT INTO usuario(nome, senha)
    VALUES("${name}", "${passwd}")
    `

    return database.execute(sql);
}

// SIGN IN 


function signIn(name, passwd) {
    const sql =
        `SELECT * FROM usuario
    WHERE nome = "${name}" && senha = "${passwd}" 
    `

    return database.execute(sql)
}


module.exports = {
    signUp,
    signIn
}