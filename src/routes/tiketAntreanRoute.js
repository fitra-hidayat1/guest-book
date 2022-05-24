const express = require('express')
const router = express.Router()

const { getAllTiketAntreans, getTiketAntrean, createTiketAntrean, updateTiketAntrean, deleteTiketAntrean } = require('../controllers/TiketAntreanController')

// Get All TiketAntreans
router.get('/', getAllTiketAntreans)

// Get Single TiketAntrean by id
router.get('/:id', getTiketAntrean)

// Create TiketAntrean
router.post('/', createTiketAntrean)

// Update TiketAntrean by id
router.put('/:id', updateTiketAntrean)

// Delete TiketAntrean by id
router.delete('/:id', deleteTiketAntrean)

module.exports = router