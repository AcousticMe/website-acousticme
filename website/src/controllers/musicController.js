const musicModel = require("../models/musicModel");

function searchAllMusic(req, res) {

    musicModel.searchAllMusic().then((musics) => {
        return res.status(200).json(musics)
    })

}

function searchMusicById(req, res) {

    const id = req.params.id

    musicModel.searchMusicById(id)
        .then((music) => {
            return res.status(200).json(music)
        })
}

function postMusic(req, res) {

    const musicName = req.body.musicName
    const artist = req.body.artist
    const genre = req.body.genre
    const chords = req.body.chords
    const linkMusicImage = req.body.linkMusicImage
    const demonstrationVideoLink = req.body.demonstrationVideoLink
    const originalVideoLink = req.body.originalVideoLink 
    const description = req.body.description
    const rhythm = req.body.rhythm


    musicModel.postMusic(musicName, artist, genre, chords, linkMusicImage, demonstrationVideoLink, originalVideoLink, description, rhythm)
        .then(music => {
            return res.status(201).json({ msg: "Música postada!", music })
        })
}

function deleteMusic(req, res) {
    const id = req.params.id

    musicModel.deleteMusic(id)
    .then(music => {
        return res.status(204).json({ msg: `Música ${id} deletada com sucesso`, music  })
    })
}

function getAllRhythm(req, res) {
    musicModel.getAllRhythm(req, res)
    .then(rhythm => {
        return res.status(200).json(rhythm)
    })
}

module.exports = {
    searchAllMusic,
    searchMusicById,
    postMusic,
    deleteMusic,
    getAllRhythm
}