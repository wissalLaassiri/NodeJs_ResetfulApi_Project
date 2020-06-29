const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET request to products'
    })
})


router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling POST request to products'
    })
})

router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Updated products'
    })
})

router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted products'
    })
})
module.exports = router