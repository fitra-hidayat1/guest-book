const express = require('express')
const router = express.Router()

const { getAllSubBagians, getSubBagian, createSubBagian, updateSubBagian, deleteSubBagian } = require('../controllers/subBagController')

// Get All Sub Bagians
router.get('/', getAllSubBagians)

// Get Single Sub Bagian by id
router.get('/:id', getSubBagian)

// Create Sub Bagian
router.post('/', createSubBagian)

// Update Sub Bagian by id
router.put('/:id', updateSubBagian)

// Delete Sub Bagian by id
router.delete('/:id', deleteSubBagian)

module.exports = router