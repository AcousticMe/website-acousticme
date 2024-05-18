// IMPORT

const express = require("express")
const router = express.Router()

const musicController = require("../controllers/musicController")

// SEARCH ALL MUSIC

router.get("/allMusic", (req, res) => {
    musicController.searchAllMusic(req, res)
})

// GET MUSIC BY ID

router.get("/music/:id", (req, res) => {
    musicController.searchMusicById(req, res)
})

// POST MUSIC

router.post("/music", (req, res) => {
    musicController.postMusic(req, res)
})

// DELETE MUSIC

router.delete("/music/:id", (req, res) => {
    musicController.deleteMusic(req, res)
})


// GET ALL RHYTHM

router.get("/rhythm", (req, res) => {
    musicController.getAllRhythm(req, res)
})

module.exports = router;