const express = require('express');
const router = express.Router();

router.get('/user', (req, res)=>{
    res.status(200).json({message: 'Dummy data'});
})

module.exports = router;