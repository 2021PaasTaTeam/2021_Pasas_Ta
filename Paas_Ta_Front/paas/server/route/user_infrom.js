const express = require('express');
const router = express.Router();
const db = require('../config/db');
 
router.get('/login', (req, res) => {
	// 임시로 값을 넣어 주었다.
    res.send({data: 'data'})
});
 
module.exports = router;