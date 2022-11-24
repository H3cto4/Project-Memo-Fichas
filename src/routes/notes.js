const express = require('express');
const router = express.Router();
const _ = require('underscore');

const notes = require('../ejemplo.json');
console.log(notes);

router.get('/', (req, res) =>{
     res.json(notes);
    
      
})

router.post('/', (req, res) =>{
      const { palabra, tipo, significado } = req.body;
      if(palabra && tipo && significado){
            const id = notes.length + 1
            const newPalabra = {...req.body, id};
            console.log(newPalabra);
            notes.push(newPalabra);
            res.json(notes);
      } else {
            res.send('petición erronea.');
      }
                
});

router.delete('/:id', (req, res) =>{
      const { id } = req.params;
      _.each(notes, (note, i) => {
            if(note.id == id) {
                  notes.splice(i, 1);
            }
      });
      res.send(notes);

});

module.exports = router;