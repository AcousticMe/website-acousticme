const database = require("../database/config")

function searchAllMusic() {

    const sql = `
    SELECT musica.id, musica.nome, musica.genero, musica.artista, musica.descricao, musica.acordes, musica.linkImagem, musica.linkVideoOriginal, linkVideoDemonstracao, ritmo.id idRitmo, ritmo.nome nomeRitmo
    FROM musica
    LEFT JOIN ritmo
    ON musica.fkRitmo = ritmo.id
    ORDER BY musica.id DESC;`

    return database.execute(sql)
}

function searchMusicById(id) {

    const sql = `SELECT musica.id, musica.nome, musica.genero, musica.artista, musica.descricao, musica.acordes, musica.linkImagem, musica.linkVideoOriginal, linkVideoDemonstracao, ritmo.nome nomeRitmo, ritmo.ritmo ritmo
    FROM musica
    LEFT JOIN ritmo
    ON musica.fkRitmo = ritmo.id
    WHERE musica.id = ${id}
    `

    return database.execute(sql)
}

function postMusic(musicName, artist, genre, chords, linkMusicImage, demonstrationVideoLink, originalVideoLink, description, rhythm) {

    const sql = `
    INSERT INTO musica(nome, artista, genero, descricao, acordes, linkImagem, linkVideoOriginal, linkVideoDemonstracao, fkRitmo)
    VALUES("${musicName}", "${artist}", "${genre}", "${description}", "${chords}", "${linkMusicImage}", "${originalVideoLink}", "${demonstrationVideoLink}", ${rhythm});
    `

    return database.execute(sql)
}

function deleteMusic(id) {

    const sql = `
    DELETE FROM musica 
    WHERE id = ${id} `

    return database.execute(sql)
}

function getAllRhythm() {

    const sql = `SELECT * FROM ritmo; `

    return database.execute(sql)
}


module.exports = {
    searchAllMusic,
    searchMusicById,
    postMusic,
    deleteMusic,
    getAllRhythm
}