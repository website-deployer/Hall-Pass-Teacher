const express = require('express');
const router = express.Router();

let hallPasses = [];

router.get('/', (req, res) => {
  res.json(hallPasses);
});

router.post('/', (req, res) => {
  const newPass = req.body;
  hallPasses.push(newPass);
  res.status(201).json(newPass);
});

module.exports = router;
