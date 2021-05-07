const express = require('express')

const router = express.Router()

// @route    GET api/contacts
// @desc     get all user contacts
// @access   Private

router.get('/', (req,res)=>{
    res.send('get all contacts')
} )

// @route    POST api/contacts
// @desc     add user contacts
// @access   Private

router.post('/', (req,res)=>{
    res.send('add new contacts')
} )

// @route    PUT api/contacts/:id
// @desc     Update contact
// @access   Private

router.put('/:id', (req,res)=>{
    res.send('update contacts')
} )

// @route    DELETE api/contacts
// @desc     delete contacts
// @access   Public

router.delete('/:id', (req,res)=>{
    res.send('delete contacts')
} )



module.exports = router