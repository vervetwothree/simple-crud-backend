const express = require('express')
const mongoose = require('mongoose')
const Product = require('../models/Product')
const router = express.Router()
const {getProducts, getOneProduct, createProduct, updateProduct, deleteProduct} = require('../controllers/products.controller')



//get all products
router.get('/', getProducts)

//get specific product by ID
router.get('/:id', getOneProduct)

//create a product
router.post('/', createProduct)

//update a product
router.put('/:id', updateProduct)

//delete a product
router.delete('/:id', deleteProduct)

module.exports = router;
