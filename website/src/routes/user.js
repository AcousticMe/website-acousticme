// IMPORT

const express = require("express")
const router = express.Router()

const userController = require("../controllers/userController")

// SIGNUP

router.post("/signUp", (req, res) => {
    userController.signUp(req, res)
})

// SIGNiN

router.post("/signIn", (req, res) => {
    userController.signIn(req, res)
})

module.exports = router
