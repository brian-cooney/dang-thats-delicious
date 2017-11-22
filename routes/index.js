const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  const brian = {name: 'Brian', age: 36, trendy: true };
  // res.send('Hey! It works!');
  // res.json(brian);
  res.render('Hello');
});

router.get('/reverse/:name', (req,res) => {
  const reverse = [...req.params.name].reverse().join('');
  res.send(reverse);
});

module.exports = router;
