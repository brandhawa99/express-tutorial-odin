var express = require('express');
var router = express.Router();


router.get('/',(req,res,next)=>{
    res.send('hello catalog')
})

router.get('/books',(req,res,next)=>{
    res.send('hello books')
})

router.get('/genres',(req,res,next)=>{
    res.send('hello books')
})
router.get('/authors',(req,res,next)=>{
    res.send('hello books')
})

router.get('/book/create',(req,res,next)=>{
    res.send('create bok');

})
router.get('/book/:id',(req,res,next)=>{
    res.send('this is a book with its id')
})



module.exports = router