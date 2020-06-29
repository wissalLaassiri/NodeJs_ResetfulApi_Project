const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Orders featched'
    })
})


router.post('/', (req, res, next) => {
    res.status(201).json({ // 201 because it means every thins is succesful (creation) 
        message: 'Orders Created'
    })
})

router.get('/:orderId', (req, res, next) => {
    const id = req.params.orderId
    res.status(200).json({
        message: 'Orders',
        orderId: id
    })
})

router.delete('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'Order deleted',
        orderId: req.params.orderId
    })
})

module.exports = router