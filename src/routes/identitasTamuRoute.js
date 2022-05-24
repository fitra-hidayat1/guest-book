const express = require('express')
const router = express.Router()

const { getAllIdentitasTamus, getIdentitasTamu, createIdentitasTamu, updateIdentitasTamu, deleteIdentitasTamu } = require('../controllers/IdentitasTamuController')

// Get All IdentitasTamus
router.get('/', getAllIdentitasTamus)

// Get Single IdentitasTamu by id
router.get('/:id', getIdentitasTamu)

// Create IdentitasTamu
router.post('/', createIdentitasTamu)

// Update IdentitasTamu by id
router.put('/:id', updateIdentitasTamu)

// Delete IdentitasTamu by id
router.delete('/:id', deleteIdentitasTamu)

module.exports = router