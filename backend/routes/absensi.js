const express = require('express')
const router = express.Router()
const AbsensiModel = require('../models/absensi')

router.get('/', async (req, res) => {
    const absensi = await AbsensiModel.findAll()
    res.status(200).json({
        data: absensi,
        metadata: "test absensi endpoint"
    })
})

router.post('/checkin', async (req, res) => {
    const { nim } = req.body

    const absensi = await AbsensiModel.create({
        users_nim: nim,
        status: 'in'
    })
    
    res.status(200).json({
        data: absensi,
        metadata: "checkin success"
    })
})

router.post('/checkout', async (req, res) => {
    const { nim } = req.body

    const absensi = await AbsensiModel.create({
        users_nim: nim,
        status: 'out'
    })

    res.status(200).json({
        data: absensi,
        metadata: "checkout success"
    })
})

module.exports = router