const express = require('express');
const router = express.Router();


router.get('/users/signin', (req, res) =>{
      res.send('ingresar app');

});

router.get('/users', (req, res) =>{
  res.send('formulario app');

});

module.exports = router;