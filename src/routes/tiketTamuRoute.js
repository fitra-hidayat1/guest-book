const express = require('express')
const router = express.Router()

const { getAllTiketTamus, getTiketTamu, createTiketTamu, updateTiketTamu, deleteTiketTamu } = require('../controllers/TiketTamuController')

// Get All TiketTamus
router.get('/', getAllTiketTamus)

// Get Single TiketTamu by id
router.get('/:id', getTiketTamu)

// Create TiketTamu
router.post('/', createTiketTamu)

// Update TiketTamu by id
router.put('/:id', updateTiketTamu)

// Delete TiketTamu by id
router.delete('/:id', deleteTiketTamu)

module.exports = router