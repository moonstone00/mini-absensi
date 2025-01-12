const express = require('express')
const router = express.Router()
const UsersModel = require('../models/users')

router.get('/', async (req, res) => {
    const users = await UsersModel.findAll()

    res.status(200).json({
        data: users,
        metadata: "test user endpoint"
    })
})

router.post('/', async (req, res) => {
    const {nim, nama, password} = req.body

    const users = await UsersModel.create({
        nim, nama, password
    })

    res.status(200).json({
        data: users,
        metadata: "test user endpoint"
    })
})

router.put('/', async (req, res) => {
    const {nim, nama, password, passwordBaru} = req.body
    const userData = await UsersModel.findOne({where: {nim: nim}})

    if(userData.password === password) {
        const users = await UsersModel.update({
            nama, password: passwordBaru
        }, {where: {nim: nim}})

        res.status(200).json({
            users: {updated: users[0]},
            metadata: "user updated!"
        })
    } else {
        res.status(401).json({
            error: "Data invalid",
            metadata: password
        })
    }
})

module.exports = router