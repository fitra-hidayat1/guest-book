const express = require('express')
const router = express.Router()

const { getAllBagians, getBagian, createBagian, updateBagian, deleteBagian } = require('../controllers/bagianController')

// Get All Bagians
router.get('/', getAllBagians)

// Get Single Bagian by id
router.get('/:id', getBagian)

// Create Bagian
router.post('/', createBagian)

// Update Bagian by id
router.put('/:id', updateBagian)

// Delete Bagian by id
router.delete('/:id', deleteBagian)

module.exports = router