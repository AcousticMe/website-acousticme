const database = require("../database/config")

function searchAllMusic() {

    const sql = `
    SELECT * FROM musica
    ORDER BY id DESC;`

    return database.execute(sql)
}

function searchMusicById(id) {

    const sql = `
    SELECT * FROM musica 
    WHERE id = '${id}'; 
    `

    return database.execute(sql)
}

function postMusic(musicName, artist, genre, chords, linkMusicImage, demonstrationVideoLink, originalVideoLink, description) {

    const sql = `
    INSERT INTO musica(nome, artista, genero, descricao, acordes, linkImagem, linkVideoOriginal, linkVideoDemonstracao)
    VALUES("${musicName}", "${artist}", "${genre}", "${description}", "${chords}","${linkMusicImage}", "${originalVideoLink}", "${demonstrationVideoLink}")
    `

    return database.execute(sql)
}

function deleteMusic(id) {

    const sql = `
    DELETE FROM musica 
    WHERE id = ${id}`

    return database.execute(sql)
}

module.exports = {
    searchAllMusic,
    searchMusicById,
    postMusic,
    deleteMusic
}