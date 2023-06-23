const express = require('express')
const router = express.Router()
const Author = require('../models/author')

router.get('/', (req, res) => {
    res.render('authors/index')
})

// New Author route
router.get('/new', (req, res) => {
    res.render('authors/new', { author: new Author() })
})

// Create Author route
router.post('/', (req, res) => {
    res.send('Create')
})

module.exports = router