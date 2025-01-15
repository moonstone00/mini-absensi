const express = require('express')
const bcrypt = require('bcrypt')
const router = express.Router()
const UsersModel = require('../models/users')
const passwordCheck = require('../utils/passwordCheck')

router.get('/', async (req, res) => {
    const users = await UsersModel.findAll()

    res.status(200).json({
        data: users,
        metadata: "test user endpoint"
    })
})

router.post('/', async (req, res) => {
    const {nim, nama, password} = req.body

    const encryptedPassword = await bcrypt.hash(password, 10)

    const users = await UsersModel.create({
        nim, nama, password: encryptedPassword
    })

    res.status(200).json({
        registered: users,
        metadata: "test user endpoint"
    })
})

router.put('/', async (req, res) => {
    const {nim, nama, password, passwordBaru} = req.body
    // const userData = await UsersModel.findOne({where: {nim: nim}})

    // const compare = await bcrypt.compare(password, userData.password)
    const check = await passwordCheck(nim, password)

    const encryptedPassword = await bcrypt.hash(passwordBaru, 10)

    if(check.compare) {
        const users = await UsersModel.update({
            nama, password: encryptedPassword
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

router.post('/login', async (req, res) => {
    const {nim, password} = req.body
    // const user = await UsersModel.findOne({where: {nim: nim}})
    // const compare = await bcrypt.compare(password, user.password)

    try {
        const check = await passwordCheck(nim, password)
        if(check) {
            res.status(200).json({
                data: check.userData,
                metadata: "user login success"
            })
        }
    } catch(error) {
        res.status(500).json({
            error: "Data Invalid"
        })
    }


})

module.exports = router